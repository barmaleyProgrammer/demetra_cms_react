const config = {
    tagName: 'h1',
    apiKey: 'trrjxpo6uxcon8vuhhjmsazwa7bylqfl3lossz7a2555ulqt',
    tinyMCEOptions: {
        // menubar: true,
        plugins: 'preview code autolink autosave save directionality visualblocks visualchars fullscreen link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars linkchecker emoticons',
        toolbar: 'quickimage <!--quickimage вставить фото --> undo redo | styles | bold italic | alignment align-center align-right align justify | ' +
            'bulliest plist outdent indent | link image | print preview media fullscreen | ' +
            'fore color backcolor emoticons | help',
        menu: {
            favs: { title: 'My Favorites', items: 'code visual | search-replace | emoticons' }
        },
        menubar: 'faves file edit view insert format tools table help',
        fontsize_formats: '10px 12px 14px 16px 18px 20px 22px 24px 26px 28px 30px 32px',
    }
};

export default config;
