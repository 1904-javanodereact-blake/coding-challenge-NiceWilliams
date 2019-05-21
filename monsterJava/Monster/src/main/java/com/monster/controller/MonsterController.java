package com.monster.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.monster.model.Monster;
import com.monster.service.MonsterService;

@RestController
public class MonsterController {

	@Autowired
	private MonsterService monsterService;
	
	@GetMapping("{id}")
	public Monster findById(@PathVariable int id) {
		return null;
	}

	public MonsterController() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MonsterController(MonsterService monsterService) {
		super();
		this.monsterService = monsterService;
	}

	public MonsterService getMonsterService() {
		return monsterService;
	}

	public void setMonsterService(MonsterService monsterService) {
		this.monsterService = monsterService;
	}

	@Override
	public String toString() {
		return "MonsterController [monsterService=" + monsterService + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((monsterService == null) ? 0 : monsterService.hashCode());
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
		MonsterController other = (MonsterController) obj;
		if (monsterService == null) {
			if (other.monsterService != null)
				return false;
		} else if (!monsterService.equals(other.monsterService))
			return false;
		return true;
	


