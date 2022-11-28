document.addEventListener("DOMContentLoaded", (event) => {
    let create_bookmark_form = document.getElementById("create_bookmark_form")
    let bookmarks_view = document.getElementById("bookmarks_view")

    let create_a_bookmark = document.getElementById("create_a_bookmark")
    let view_bookmarks = document.getElementById("view_bookmarks")

    let bookmark_simple_view = document.getElementById("bookmark_simple_view")
    let bookmarks_list = document.getElementById("bookmarks_list")
    let single_bookmark_view = document.getElementById("single_bookmark_view")
    let item_counter = 0

    create_bookmark_form.style.display = "none"
    bookmarks_view.style.display = "none"

    create_a_bookmark.onclick = () => {
        create_bookmark_form.style.display = "flex"
        bookmarks_view.style.display = "none"
    }
    view_bookmarks.onclick = () => {
        create_bookmark_form.style.display = "none"
        bookmarks_view.style.display = "flex"
    }
    let categories = document.getElementsByClassName("category_view")
    console.log(categories)
for(let i = 0; i < categories.length ; i++){
    categories[i].onclick = () => {
        displayOnly(categories[i].innerText)

    }
}


    create_bookmark_form.onsubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(create_bookmark_form)

        let new_view = bookmark_simple_view.cloneNode(true)
        new_view.id = "unique id " + ++item_counter;
        new_view.querySelector("#title_value").innerText = formData.get("title");
        new_view.querySelector("#category_name_value").innerText = formData.get("category");

        bookmarks_list.appendChild(new_view)

        new_view.onclick = (event) => {
            showItem(formData)
        }
        alert("data saved, click view to view them")
        // for (const [key, value] of formData) {
        //     console.log(`${key}: ${value}\n`)
        // }
    }

    function displayOnly(filter){
    let group = document.getElementsByClassName("bookmark_simple_view")
        for (let i = 0; i < group.length; i ++){
            if(group[i].querySelector("#category_name_value").innerText !== filter){
                group[i].style.display = "none";
                console.log("invisible")
            }else{
                group[i].style.display = "block";
                console.log("visible")
            }

        }
    }
    function showItem(form_data){
        single_bookmark_view.querySelector("#single_title").innerText = form_data.get("title")
        single_bookmark_view.querySelector("#single_category").innerText = form_data.get("category")
        single_bookmark_view.querySelector("#single_description").innerText = form_data.get("description")
        single_bookmark_view.querySelector("#single_link").innerText = form_data.get("link")


    }







} )