let crewCounter = 0

class CrewMember {
  constructor(position) {
    this.id = crewCounter++
    this.position = position
    CrewMember.all.push(this)
    this.currentShip = (function() {
      let memberShip = Spaceship.all.find(ship => {
        ship.crew.includes(this)
      })
      if (memberShip) {
        return memberShip
      } else {
        return "Looking for a Rig"
      }
    })()
  }

  // myShip() {
  //   if (spaceshipId) {
  //     var ship = SpaceShip.findById(this.spaceshipId)
  //     return ship.name
  //   } else {
  //     return "Looking for a Rig"
  //   }
  // }

  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig" || this.position !== "Pilot") {
      return "had no effect"
    } else {
      this.currentShip.warpDrive = "engaged!"
    }
  }

  setsInvisibility() {
    if (
      this.currentShip === "Looking for a Rig" ||
      this.position !== "Defender"
    ) {
      return "had no effect"
    } else {
      this.currentShip.cloaked = true
    }
  }

  chargePhasers() {
    if (
      this.currentShip === "Looking for a Rig" ||
      this.position !== "Gunner"
    ) {
      return "had no effect"
    } else {
      this.currentShip.phasersCharge = "charged!"
    }
  }
}
CrewMember.all = []
