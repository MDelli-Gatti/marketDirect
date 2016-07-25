User login:
route = POST, path = "/login" data = User object (contains String username and String password)

User logout:
route = "POST" path = "/logout"

Create User:
route = "POST" path = "/create-user" data = User object (contains String username and String password)

Create Vendor:
route = "POST" path = "create-vendor" data = MultipartFile file, String name, String phone, String email, String website, String location, String date

Get ALL Vendors:
route = "GET" path = "get-vendors" (plural)

Get ONE Vendor
route = "GET" path = "get-vendor" (singular) data = int id

Edit Vendor:
route = "POST" path = "edit-vendor" data = MultipartFile file, String name, String phone, String email, String website, String location, String date

Delete Vendor:
route = "POST" path = "delete-vendor" data = int id

Create Item:
route = "POST" path = "create-item" data = String category, MultipartFile file, String description, String price, int quantity

Get ALL Items:
route = "GET" path = "get-items" (plural)

Get ONE Item
route = "GET" path = "get-item" (singular) data = int id

Get Items By Category:
route = "GET" path = "items-by-category" (plural) data = String category

Edit Item
route = "POST" path = "edit-item" data = MultipartFile file, String name, String description, String category, String price, Integer quantity

Delete Item:
route = "POST" path = "delete-item" data = int id

Search By Item Name:
route = "GET" path = "search-item" data = "String search"

Search By Vendor Name:
route = "GET" path = "search-vendor" data = "String search"

Add Shopping List Item:
route = "POST" path = "add-shopping-list-item" data = Item object

Remove Shopping List Item:
route = "POST" path = "remove-shopping-list-item" data = Item object

Get Shopping List
route = "GET" path = "get-shopping-list"

Get Comments
route = "GET" path = "get-comments" data = Vendor object

Create Comment
route = "POST" path = "create-comment" data = Vendor object & Comment object

Edit Comment
route = "POST" path = "edit-comment" data = String text & Comment object

Delete Comment
route = "POST" path = "delete-comment" data = Comment object

