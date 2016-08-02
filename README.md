Users : FarmerJohn, FarmerClyde, ShopperBill
ALL passwords: "password1"
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

Get ONE Vendor:
route = "GET" path = "get-vendor" (singular) data = int id

Add Vendor Photo:
route = "POST" path = "add-vendor-photo" data = MultipartFile file, int id

Edit Vendor:
route = "POST" path = "edit-vendor" data = Vendor Object

Delete Vendor:
route = "POST" path = "delete-vendor" data = int id

Create Item:
route = "POST" path = "create-item" data = String category, String description, String price, int quantity, Vendor object

Add Photo To Item
route = "POST" path = "add-item-photo" data = MultipartFile file, int id

Get ALL Items:
route = "GET" path = "get-items" (plural)

Get ONE Item
route = "GET" path = "get-item" (singular) data = Item object with an id

Get Items By Category:
route = "GET" path = "items-by-category" (plural) data = String category

Get Produce Items
route = "GET" path = "items-produce"

Get Art Items
route = "GET" path = "items-art"

Get Hand Crafted Items
route = "GET" path = "items-hand-crafted"

Get Misc Items
route = "GET" path = "items-misc"

Get Item Images
route = "GET" path = "get-item-images" data = Vendor object

Edit Item
route = "POST" path = "edit-item" data = Item object with an id

Edit Item Image
route = "POST" path = "edit-item-photo" data = MultipartFile file, Item object with an id

Delete Item:
route = "POST" path = "delete-item" data = int id

Search By Item Name:
route = "GET" path = "search-item" data = "String search"

Search By Vendor Name:
route = "GET" path = "search-vendor" data = "String search"

Add Shopping List Item:
route = "POST" path = "add-shopping-list-item" data = Item object with an id

Remove Shopping List Item:
route = "POST" path = "remove-shopping-list-item" data = Item object with an id

Get Shopping List
route = "GET" path = "get-shopping-list"

Get Comments
route = "GET" path = "get-comments" data = int id (of the vendor)

Create Comment
route = "POST" path = "create-comment" data = int id (of the vendor) & Comment object

Edit Comment
route = "POST" path = "edit-comment" data = String text & int id (of the comment)

Delete Comment
route = "POST" path = "delete-comment" data = int id (of the comment)

Find Items By Location
route = "GET" path = "find-by-location" data = String location

