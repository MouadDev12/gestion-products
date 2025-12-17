
  // Liste des produits 
        let products = [
            { id: 1, name: "Produit 1", price: 10, image: "image1.jpg" },
            { id: 2, name: "Produit 2", price: 20, image: "image2.jpg" },
            { id: 3, name: "Produit 3", price: 30, image: "image3.jpg" }
        ];

        // Fonction pour afficher la liste des produits
        function displayProducts() {
            const productList = document.getElementById("products");
            productList.innerHTML = ""; 

            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.className = "product";
                productDiv.innerHTML = `
                    <div class="product-actions">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>Prix : ${product.price} €</p>
                        <button class="edit" onclick="editProduct(${product.id})">Modifier</button>
                        <button class="delete" onclick="deleteProduct(${product.id})">Supprimer</button>
                    </div>
                `;
                productList.appendChild(productDiv);
            });
        }

        // Fonction pour ajouter un produit
        function addProduct(event) {
            event.preventDefault(); // Empêcher le rechargement de la page

            const name = document.getElementById("product-name").value;
            const price = document.getElementById("product-price").value;
            const image = document.getElementById("preview-image").src || "default.jpg"; // Image par défaut si aucune sélectionnée

            if (document.getElementById("product-id").value) {
                // Modification d'un produit existant
                const id = parseInt(document.getElementById("product-id").value);
                const productIndex = products.findIndex(p => p.id === id);
                products[productIndex] = { id, name, price, image };
            } else {
                // Ajout d'un nouveau produit
                const newProduct = {
                    id: products.length + 1,
                    name,
                    price,
                    image
                };
                products.push(newProduct);
            }

            resetForm();
            displayProducts
        };

        // Fonction pour supprimer un produit
        function deleteProduct(id) {
            products = products.filter(product => product.id !== id);
            displayProducts();
        }

        // Fonction pour modifier un produit
        function editProduct(id) {
            const product = products.find(product => product.id === id);
            if (product) {
                document.getElementById("product-id").value = product.id;
                document.getElementById("product-name").value = product.name;
                document.getElementById("product-price").value = product.price;
                document.getElementById("preview-image").src = product.image;
                document.getElementById("preview-image").style.display = "block";
                document.getElementById("cancel-button").style.display = "inline-block";
            }
        }

        // Afficher la liste des produits au chargement de la page
        displayProducts();

  