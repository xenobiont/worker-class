class Worker {
	constructor(name, surname, rate) {
		this.name = name;
		this.surname = surname;
		this.rate = rate;
		// this.days = days
	}

	getFullName() {
		return this.name + this.surname;
	}

	getSalary(workingDays = this.days) {
		return workingDays * this.rate;
	}

	static getWorkingDaysCount() {
		const now = new Date();
		const range = now.getDate();
		let workingDaysCount = 0;

		for (let i = 1; i <= range; i++) {
			now.setDate(i);
			const weekDay = now.getDay();
			if (weekDay !== 0 && weekDay !== 6) workingDaysCount++;
			//  dates.push(now);
		}
		return workingDaysCount;
	}
}

const Pete = new Worker('Pete', 'Sullivan', 20);
console.log(Pete.getSalary(Worker.getWorkingDaysCount()));
