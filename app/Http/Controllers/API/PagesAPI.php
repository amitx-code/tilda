<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Page;
use Illuminate\Http\Request;
use Validator;
class PagesAPI extends Controller
{
    public function index(Request $request)
    {

        $param=$request->get('param');
        $method=$request->get('method');
        if ($method=='getAll'){
            $pages=Page::all();
            if($pages){
                $total=$pages->count();
                return response()->json([
                    'result' => true,
                    'data'=>$pages,
                    'total'=>$total


                ]);

            }
            else{
                return response()->json([
                    'result' => false,


                ]);
            }
        }
        if ($method=='getById'){

            $pages=Page::find($request->get('id'));
            return response()->json([
                'result' => true,
                'data'=>$pages,



            ]);
        }



    }
    public function store(Request $request)
    {

        $dat=$request->all();
        if($dat['method']=='save'){
            $messages = [
                'name.required' => 'Не заполнено поле имя',

            ];
            $validator = Validator::make($dat, [
                'name' => 'required',





            ],$messages);
            if ($validator->fails()) {
                $errors = $validator->errors();
                return response()->json([
                    'result' => false,
                    'errors' => $errors,

                ]);
            }
          //  dd($dat);
            if($dat['id']=='new'){
                $page=new Page();

            }
            else{
                $page=Page::find($dat['id']);
            }
            $page->name=$dat['name'];

            $page->data=$dat['data'];
            $result=$page->save();


            return response()->json([
                'result' => $result,


            ]);
        }
        if($dat['method']=='delete'){
            $page=Page::find($dat['id']);
            $result=$page->delete();
            return response()->json([
                'result' => $result,


            ]);
        }

    }

}
