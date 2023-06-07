
    // Función para agregar una reseña al formulario
    function addReview(event) {
        event.preventDefault();
      
        var name = document.getElementById('name').value;
        var review = document.getElementById('review').value;
        var rating = document.getElementById('rating').value;
      
        var reviewList = document.getElementById('reviewList');
        var reviewItem = document.createElement('div');
        reviewItem.classList.add('review');
        reviewItem.innerHTML = '<h4>' + name + '</h4><p>' + review + '</p><div class="stars">' + getStars(rating) + '</div>';
        reviewList.appendChild(reviewItem);
      
        document.getElementById('reviewForm').reset();
      }
      
      // Función para generar las estrellas según la calificación
      function getStars(rating) {
        var stars = '';
        for (var i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
          } else {
            stars += '<i class="far fa-star"></i>';
          }
        }
        return stars;
      }
      
      // Agregar evento de envío al formulario
      document.getElementById('reviewForm').addEventListener('submit', addReview);
      