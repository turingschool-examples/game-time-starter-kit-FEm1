const bulletCentipedeCollision = (exterminator, centipede) => {

  exterminator.bulletsArray.forEach((bullet, indexA, bulletArray) => {
    centipede.centipedeArray.forEach((segment, indexB, centipedeArray) => {
      console.log(centipedeArray, bulletArray);

      let bulletProps = { radius: bullet.radius, x: bullet.x, y: bullet.y };
      let centipedeProps = { radius: segment.radius,
        x: segment.x, y: segment.y };

      let bx = bulletProps.x - centipedeProps.x;
      let by = bulletProps.y - centipedeProps.y;

      let distance = Math.sqrt(bx * bx + by * by);


      if (distance < bulletProps.radius + centipedeProps.radius) {
        centipedeArray.splice(indexB, 1);
        bulletArray.splice(indexA, 1); 
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
}

export default {bulletCentipedeCollision};