<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Site;
use Illuminate\Http\Request;
use Validator;

class SiteAPI extends Controller
{
    public function index()
    {
     //   dd('dsfsdf');
        $site=Site::first();
        if($site){
            return response()->json([
                'result' => true,
                'data'=>$site,


            ]);

        }
        else{
            return response()->json([
                'result' => false,


            ]);
        }

    }

    public function show($id)
    {

    }

    public function store(Request $request)
    {
        $dat=$request->all();
        $messages = [
            'name.required' => 'Не заполнено поле имя',
            'description.required' => 'Не заполнено поле описание',
            'keyword.required' => 'Не заполнено поле ключевые слова',
        ];
        $validator = Validator::make($dat, [
            'name' => 'required',
            'description' => 'required',
            'keyword' => 'required',





        ],$messages);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json([
                'result' => false,
                'errors' => $errors,

            ]);
        }

        $site=Site::first();
        if(!$site){
            $site=new Site();
        }
        $site->name=$dat['name'];
        $site->description=$dat['description'];
        $site->keyword=$dat['keyword'];
        $result=$site->save();
        //dd($dat);



        return response()->json([
            'result' => $result,


        ]);
    }

    public function update(Request $request, $id)
    {
        //   dd($request);
    }

    public function delete(Request $request, $id)
    {

    }
}
