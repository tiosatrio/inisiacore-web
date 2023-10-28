<?php



public function frontContactStore(Request $request){
    $contact = Contact::create([
        'name' => $request->input('name'),
        'surname' => $request->input('surname'),
        'email' => $request->input('email'),
        'message' => $request->input('message')
    ]);
    $emails = [$contact->email, 'tiosatrio2901@gmail.com'];
    Mail::to($emails)->send(new ContactSend($contact));
    if ($contact) {
        return redirect()->route('contact')
        ->with('success', 'Awesome!! Thank you, we will get back to you shortly');
    } 
}
?>