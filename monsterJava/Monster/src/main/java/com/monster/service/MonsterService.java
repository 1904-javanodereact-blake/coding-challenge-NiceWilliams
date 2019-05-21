package com.monster.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.monster.model.Monster;
import com.monster.repositories.MonsterRepo;

public class MonsterService {
	
	@Autowired
	private MonsterRepo monsterRepo;
	
	public Monster findById(int id);

	public MonsterService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MonsterService(MonsterRepo monsterRepo) {
		super();
		this.monsterRepo = monsterRepo;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((monsterRepo == null) ? 0 : monsterRepo.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		MonsterService other = (MonsterService) obj;
		if (monsterRepo == null) {
			if (other.monsterRepo != null)
				return false;
		} else if (!monsterRepo.equals(other.monsterRepo))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "MonsterService [monsterRepo=" + monsterRepo + "]";
	}

	public MonsterRepo getMonsterRepo() {
		return monsterRepo;
	}

	public void setMonsterRepo(MonsterRepo monsterRepo) {
		this.monsterRepo = monsterRepo;
	}
	
	return monsterRep.getOne(id);
	

}
