<?php


/**
 * HomeController
 *
 * Controller for renders the first page of the app.
 *
 *   _____
 *  /     \
 * |  o o  |
 * |   >   |
 * |  \_/  |
 * \_____/
 *
 *
 * @sekoyaTech
 * @author SekoyaDigital
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Function to render component "Index" in my react App.
     *
     * @return Response
     */
    public function index()
    {
        return Inertia::render('Index');
    }
}
