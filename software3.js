function searchClothes() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    
 
    const boysClothes = document.querySelectorAll('#boys-clothes .clothing-item');
    const girlsClothes = document.querySelectorAll('#girls-clothes .clothing-item');

   
    boysClothes.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchTerm)) {
            item.style.display = 'inline-block';
        } else {
            item.style.display = 'none';
        }
    });


    girlsClothes.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchTerm)) {
            item.style.display = 'inline-block';
        } else {
            item.style.display = 'none';
        }
    });
}

const addToCart = () => {
    alert("Item added to cart!");
  }
  

  document.querySelectorAll('.clothe-btn').forEach(button => {
    button.addEventListener('click', addToCart);
  });