<?php

namespace App\Console\Commands;

use App\Models\Lead;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ExportCsv extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'export:csv';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        # bel
        $sftp = Storage::disk('sftp1');
        $lines = "email|date|civilite|prenom|nom|origine|optin\n";

        $leads = Lead::all();
        foreach ($leads as $lead) {
            $email = $lead->email;
            $day = $lead->day ?? "ND";
            $month = $lead->month ?? "ND";
            $year = $lead->year ?? "ND";
            $date = Carbon::parse($lead->created_at)->format("Y/m/d");
            $civility = "";
            $firstname = $lead->firstname;
            $lastname = $lead->lastname;
            $origin = "2024_BLEDICHEF_KIRI";
            $optIn = $lead->optinBledina ? 1 : 0;
            $lines .= $email . "|" . $date . "|" . $civility . "|" . $firstname . "|" . $lastname . "|" . $origin . "|" . $optIn . "\n";
        }

        $fileName = "2024_BLEDICHEF_KIRI_" . now()->format("Ymd") . ".csv";
        $sftp->put("" . $fileName, $lines);
        $this->info("exported for bel.");




        # bledina
        $lines = "Prof_id;Prof_Origine;Civi_id;Prof_nom;Prof_prenom;Prof_date_saisie_redress;Prof_email;prof_optinCourrier;prof_optinPartenaire;Prof_optinEmail;prof_optinSms;adresse1;adresse2;cp;ville;Telephone;Pays;Prenom_enfant;DateDeNaissance_enfant\n";

        $leads = Lead::all();
        foreach ($leads as $lead) {
            $email = $lead->email;
            $day = $lead->day ?? "ND";
            $month = $lead->month ?? "ND";
            $year = $lead->year ?? "ND";
            $date = Carbon::parse($lead->created_at)->format("Y/m/d");
            $civility = "";
            $firstname = $lead->firstname;
            $lastname = $lead->lastname;
            $origin = "2024_BLEDICHEF_KIRI";
            $optIn = $lead->optinBledina;
            $lines
                .= 41245679 . ";"
                . "BLEDINAKIRI" . ";"
                . null . ";"
                . $lastname . ";"
                . $firstname . ";"
                . $date . ";"
                . $email . ";"
                . 0 . ";"
                . 0 . ";"
                . ($optIn ? 1 : 0) . ";"
                . 0 . ";"
                . "" . ";"
                . "" . ";"
                . "" . ";"
                . "" . ";"
                . "" . ";"
                . "" . ";"
                . "" . ";"
                . $day . "/" . $month . "/" . $year . "\n";
        }

        $fileName = "FluxBDL_BLEDINA_BLEDINAKIRI_" . now()->format("Ymdhis") . ".csv";
        $sftp->put("" . $fileName, $lines);
        $this->info("exported for bledina.");

    }
}
