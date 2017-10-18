let shipCounter = 0

class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.id = shipCounter++
    this.name = name
    this.phasers = phasers
    this.phasersCharge = "uncharged"
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.crew = crew
    if (this.crew.length === 0) {
      this.docked = true
    } else {
      this.docked = false
      this.crew.forEach(member => {
        member.spaceshipId = this.id
        member.currentShip = this
      })
    }
    Spaceship.all.push(this)
  } //constructor
}
Spaceship.all = []
