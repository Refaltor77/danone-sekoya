<?php

/**
 * Lead Controller
 *
 * Handles the creation and storage of lead data. :P
 *
 *   _____
 *  /     \
 * |  o o  |
 * |   >   |
 * |  \_/  |
 *  \_____/
 *
 *
 * @sekoyaTech
 * @author SekoyaDigital
 */

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LeadController extends Controller
{
    /**
     * Store a newly created lead in the database.
     *
     * This method validates the incoming request data and creates a new Lead instance with the provided :=)
     * data before saving it to the database.
     *
     * @param Request $request The incoming HTTP request.
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        # Validate the incoming request data
        $request->validate([
            'firstname' => 'required|max:255', # First name is required and should not exceed 255 characters
            'lastname' => 'required|max:255',  # Last name is required and should not exceed 255 characters
            'email' => [
                'required',
                'email',
                'max:255',
                function ($attribute, $value, $fail) {
                    if (!preg_match('/\.(fr|com|net|org)$/', $value)) {
                        $fail('L\'adresse email doit contenir un "@" et une extension.');
                    }
                },
                # Ensure the email is unique in the leads table
                function ($attribute, $value, $fail) {
                    if (Lead::where('email', $value)->first()) {
                        $fail('Email déjà enregistré.');
                    }
                }
            ],
            'day' => 'nullable', # Day part of the date of birth is required
            'month' => 'nullable', # Month part of the date of birth is required
            'year' => 'nullable', # Year part of the date of birth is required
            'optinBledina' => 'required|boolean', # Opt-in for Blédina offers is required and should be a boolean
            'optinKiri' => 'required|boolean', # Opt-in for Kiri offers is required and should be a boolean
        ]);

        # check if the lead origin is share.
        if ($request->get('share_id'))
        {
            $lead = Lead::where('share_id', $request->get('share_id'))->first();
            if ($lead instanceof Lead)
            {
                $leadDuplicate = $lead->replicate();
                $leadDuplicate->created_at = now();
                $leadDuplicate->share_id = null; # for check if the lead is sharing duplicate lead or saving lead from the form
                $leadDuplicate->save();
            }
        }

        # Create a new instance of the Lead model
        $lead = new Lead();

        # Assign form data to the model
        $lead->firstname = $request->input('firstname');
        $lead->lastname = $request->input('lastname');
        $lead->email = $request->input('email');
        $lead->day = $request->input('day');
        $lead->share_id = uniqid();
        $lead->month = $request->input('month');
        $lead->year = $request->input('year');
        $lead->optinBledina = $request->input('optinBledina');
        $lead->optinKiri = $request->input('optinKiri');

        # Save the model to the database
        $lead->save();


        return redirect()->to(env("APP_URL") . '?share_id=' . $lead->share_id);
    }
}
