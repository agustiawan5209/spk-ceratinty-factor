<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Penyakit;
use App\Models\GambarPenyakit;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StorePenyakitRequest;
use App\Http\Requests\UpdatePenyakitRequest;
use App\Models\Pengobatan;

class PenyakitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Penyakit/Index', [
            'penyakit' => Penyakit::orderBy('kode', 'desc')
                ->filterBySearch(Request::input('search'))
                ->paginate(10)->withQueryString(),
            'filter' => Request::only('search', 'order', 'filter'),
            'can' => [
                'add' => Auth::user()->can('add penyakit'),
                'edit' => Auth::user()->can('edit penyakit'),
                'show' => Auth::user()->can('show penyakit'),
                'delete' => Auth::user()->can('delete penyakit'),
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Penyakit/Form', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePenyakitRequest $request)
    {
        try {
            $penyakit = Penyakit::create($request->all());


            $images = $request->images;

            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $image) {
                    // Generate nama unik untuk setiap file
                    $fileName = time() . '-' . uniqid() . '.' . $image->getClientOriginalExtension();

                    // Simpan file ke direktori public/images
                    $path = $image->storeAs('images', $fileName, 'public');

                    // Tambahkan path file ke Model
                    GambarPenyakit::create([
                        'penyakit_id' => $penyakit->id,
                        'image' => $path,
                    ]);
                }
            }

            if($request->exists('keterangan_pengobatan')){
                Pengobatan::create([
                    'penyakit_id'=> $penyakit->id,
                    'keterangan'=> $request->keterangan_pengobatan,
                ]);
            }
            return redirect()->route('Penyakit.index')->with('success', 'Data Berhasil Di Tambahkan');
        } catch (\Exception $e) {
            return redirect()->route('Penyakit.index')->with('error', $e->getMessage() .' '. $e->getLine());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Penyakit $penyakit)
    {
        return Inertia::render('Admin/Penyakit/Show', [
            'penyakit' => $penyakit->with(['galeri' , 'pengobatan'])->find(Request::input('slug')),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Penyakit $penyakit)
    {
        return Inertia::render('Admin/Penyakit/Edit', [
            'penyakit' => $penyakit->with(['galeri' , 'pengobatan'])->find(Request::input('slug')),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePenyakitRequest $request, Penyakit $penyakit) {
        try {
            $penyakit = Penyakit::find(Request::input('slug'));
            $penyakit->update($request->all());


            $images = $request->images;
            if ($request->exists('images')) {
                $GambarPenyakit = GambarPenyakit::where('penyakit_id', $penyakit->id)->get();
                $path_images = [];
                foreach ($GambarPenyakit as $key => $value) {
                    // Check if there is not file detected
                    if(!in_array($value->image_path, $images)) {
                        // Check if there is an image or file to delete
                        if ($value->image_path && Storage::exists($value->image_path)) {
                            // Delete the file from storage
                            Storage::delete($value->image_path);
                        }
                        GambarPenyakit::find($value->id)->delete();
                    }else{
                        $path_images[] = $value->image_path;
                    }

                }
                $image_diff = array_diff($images, $path_images);
                // dd($image_diff);
                foreach ($image_diff as $image) {
                    // Generate nama unik untuk setiap file
                    $fileName = time() . '-' . uniqid() . '.' . $image->getClientOriginalExtension();

                    // Simpan file ke direktori public/images
                    $path = $image->storeAs('images', $fileName, 'public');

                    // Tambahkan path file ke Model
                    GambarPenyakit::create([
                        'penyakit_id' => $penyakit->id,
                        'image' => $path,
                    ]);
                }
            }
            return redirect()->route('Penyakit.index')->with('success', 'Data Berhasil Di Ubah');
        } catch (\Exception $e) {
            return redirect()->route('Penyakit.index')->with('error', $e->getMessage() .' '. $e->getLine());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Penyakit $penyakit)
    {
        try {
            $penyakit = Penyakit::find(Request::input('slug'))->delete();

            return redirect()->route('Penyakit.index')->with('success', 'Data Berhasil Di Hapus');
        } catch (\Exception $e) {
            return redirect()->route('Penyakit.index')->with('error', $e->getMessage() .' '. $e->getLine());
        }
    }
}
