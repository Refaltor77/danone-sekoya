<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Exécute les migrations.
     *
     * Cette méthode crée la table 'leads' avec diverses colonnes.
     */
    public function up(): void
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->id()
                ->comment('Primary key auto-incrementing');

            $table->string('firstname')
                ->comment('Prénom du lead / First name of the lead');

            $table->string('lastname')
                ->comment('Nom du lead / Last name of the lead');

            $table->string('email')
                ->comment('Adresse email du lead / Email address of the lead');

            $table->string('share_id')->nullable()
                ->comment('ID de partage pour le lead / Share ID of the lead');

            $table->string('day')->nullable()->default("")
                ->comment('Jour de la date de naissance / Day part of the date of birth');

            $table->string('month')->nullable()->default("")
                ->comment('Mois de la date de naissance / Month part of the date of birth');

            $table->string('year')->nullable()->default("")
                ->comment('Année de la date de naissance / Year part of the date of birth');

            $table->boolean('optinBledina')
                ->comment('Indique si le lead a accepté les offres de Blédina / Whether the lead opted in for Blédina offers');

            $table->boolean('optinKiri')
                ->comment('Indique si le lead a accepté les offres de Kiri / Whether the lead opted in for Kiri offers');

            $table->timestamps();
        });
    }

    /**
     * Annule les migrations.
     *
     * Cette méthode supprime la table 'leads'.
     */
    public function down(): void
    {
        Schema::dropIfExists('leads');
    }
};
