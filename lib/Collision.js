const bulletCentipedeCollision = (exterminator, centipede, obstacle) => {

  exterminator.bulletsArray.forEach((bullet, indexA, bulletArray) => {
    centipede.centipedeArray.forEach((segment, indexB, centipedeArray) => {

      let bulletProps = { radius: bullet.radius, x: bullet.x, y: bullet.y };
      let centipedeProps = { radius: segment.radius,
        x: segment.x, y: segment.y };

      let bx = bulletProps.x - centipedeProps.x;
      let by = bulletProps.y - centipedeProps.y;

      let distance = Math.sqrt(bx * bx + by * by);


      if (distance < bulletProps.radius + centipedeProps.radius) {
        centipedeArray.splice(indexB, 1);
      }
      
      if (centipedeArray.length === 0) {
        location.reload();
      }
      let exterminatorProps = { radius: exterminator.radius, x: exterminator.x, y: exterminator.y };
  

      let bw = exterminatorProps.x - centipedeProps.x;
      let bz = exterminatorProps.y - centipedeProps.y;


      let killPlayer = Math.sqrt(bw * bw + bz * bz);

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

  obstacle.mushroomArray.forEach((mushroom, indexM, mushroomArray) => {
    exterminator.bulletsArray.forEach((bullet) => {

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