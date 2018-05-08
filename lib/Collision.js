const bulletCentipedeCollision = (exterminator, centipede, obstacle) => {

  exterminator.bulletsArray.forEach((bullet) => {
    centipede.centipedeArray.forEach((segment, indexB, centipedeArray) => {

      let bulletProps = { radius: bullet.radius, x: bullet.x, y: bullet.y };
      let centipedeProps = { radius: segment.radius,
        x: segment.x, y: segment.y };

      let bulletCentipedeX = bulletProps.x - centipedeProps.x;
      let bulletCentipedeY = bulletProps.y - centipedeProps.y;

      let distance = Math.sqrt(bulletCentipedeX * bulletCentipedeX + bulletCentipedeY * bulletCentipedeY);


      if (distance < bulletProps.radius + centipedeProps.radius) {
        centipedeArray.splice(indexB, 1);
      }
      
      if (centipedeArray.length === 0) {
        location.reload();
      }

      let exterminatorProps = { radius: exterminator.radius, x: exterminator.x, y: exterminator.y };
  

      let exterminatorCentipedeX = exterminatorProps.x - centipedeProps.x;
      let exterminatorCentipedeY = exterminatorProps.y - centipedeProps.y;


      let killPlayer = Math.sqrt(exterminatorCentipedeX * exterminatorCentipedeX + exterminatorCentipedeY * exterminatorCentipedeY);

      if (killPlayer < exterminatorProps.radius + centipedeProps.radius) {
        location.reload();
      }
    })
  })

  obstacle.mushroomArray.forEach((mushroom) => { 
    centipede.centipedeArray.forEach((segment) => { 

      let centipedeProps = { radius: segment.radius, x: segment.x, y: segment.y };
      let mushroomProps = { radius: mushroom.radius, x: mushroom.x, y: mushroom.y };

      let mushroomCentipedeX = mushroomProps.x - centipedeProps.x;

      let mushroomCentipedeY = mushroomProps.y - centipedeProps.y;
      let distanceOne = Math.sqrt(mushroomCentipedeX * mushroomCentipedeX + mushroomCentipedeY * mushroomCentipedeY);

      if (distanceOne < mushroomProps.radius + centipedeProps.radius) {
        segment.dx = -segment.dx
      }
    })
  })

  exterminator.bulletsArray.forEach((bullet) => {
    obstacle.mushroomArray.forEach((mushroom, indexM, mushroomArray) => {

      let bulletProps = { radius: bullet.radius, x: bullet.x, y: bullet.y };
      let mushroomProps = { radius: mushroom.radius, x: mushroom.x, y: mushroom.y };

      let bulletMushroomX = mushroomProps.x - bulletProps.x;

      let mushroomCentipedeY = mushroomProps.y - bulletProps.y;
      let distanceOne = Math.sqrt(bulletMushroomX * bulletMushroomX + mushroomCentipedeY * mushroomCentipedeY);

      if (distanceOne < mushroomProps.radius + bulletProps.radius) {
        mushroomArray.splice(indexM, 1);
      }
    })
  })
}

export default {bulletCentipedeCollision};