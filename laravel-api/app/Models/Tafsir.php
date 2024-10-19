<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tafsir extends Model
{
    use HasFactory;
    protected $table = 'tafsirs';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'ayat',
        'surah',
        'ayat_no',
        'para',
        'page',
        'tafsir',
    ];
}
