const bulletCentipedeCollision = (exterminator, centipede) => {

  exterminator.bulletsArray.forEach(bullet => {
    centipede.centipedeArray.forEach(segment => {

      let bulletProps = { radius: bullet.radius, x: bullet.x, y: bullet.y };
      let centipedeProps = { radius: segment.radius,
        x: segment.x, y: segment.y };

      let bx = bulletProps.x - centipedeProps.x;
      let by = bulletProps.y - centipedeProps.y;
      let distance = Math.sqrt(bx * bx + by * by);

      if (distance < bulletProps.radius + centipedeProps.radius) {
        centipede.centipedeArray.forEach((segment, index) => {
          centipede.centipedeArray.splice(index, 1)
        })
        exterminator.bulletsArray.forEach((bullet, index) => {
          delete exterminator.bulletsArray[index]
        })
      }
    })
  })
}

export default {bulletCentipedeCollision};