class E_API {

		  constructor() {
			  this.AlrFreezed=false
		  }
		
			freeze() {
				if (!this.AlrFreezed) {
					this.AlrFreezed=true
					EalabasFixed.ents.setPosition_o = EalabasFixed.ents.setPosition;
					EalabasFixed.ents.setPosition = function s(e,r) {
						if (e!==1) {
							return EalabasFixed.ents.setPosition_o(e,r)
						}
					}
				}
			}
			unfreeze() {
				if (this.AlrFreezed) {EalabasFixed.ents.setPosition=EalabasFixed.ents.setPosition_o}
			}
			
			getPos() {
				return EalabasFixed.ents.getPosition(1);
			}
			setPos(pos) {
				if (this.AlrFreezed) {
					EalabasFixed.ents.setPosition_o(1,pos[0],pos[1],pos[2])
				}
				else {
					EalabasFixed.ents.setPosition(1,pos[0],pos[1],pos[2])
				}
			}
		
		}
window.EalabasAPI=new E_API()
