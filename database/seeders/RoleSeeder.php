<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = Role::create(['name' => 'Admin']);
        $kepala_des = Role::create(['name' => 'Pengguna']);

        // Membuat permission
        $permissions = [
            'add penyakit',
            'edit penyakit',
            'delete penyakit',
            'show penyakit',
            'add gejala',
            'edit gejala',
            'delete gejala',
            'show gejala',
            'add pengobatan',
            'edit pengobatan',
            'delete pengobatan',
            'show pengobatan',
            'add pencegahan',
            'edit pencegahan',
            'delete pencegahan',
            'show pencegahan',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }


        $user = User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password'=> bcrypt('12345678'),
        ]);


        $user->assignRole('Admin');
        $user->givePermissionTo($permissions);

    }
}
