package com.monster.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Monster {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int monsterid;
	
	@Column
	private String  monstername;
	
	private String monsterpassword;

	public Monster() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Monster(int monsterid, String monstername, String monsterpassword) {
		super();
		this.monsterid = monsterid;
		this.monstername = monstername;
		this.monsterpassword = monsterpassword;
	}

	public int getMonsterid() {
		return monsterid;
	}

	public void setMonsterid(int monsterid) {
		this.monsterid = monsterid;
	}

	public String getMonstername() {
		return monstername;
	}

	public void setMonstername(String monstername) {
		this.monstername = monstername;
	}

	public String getMonsterpassword() {
		return monsterpassword;
	}

	public void setMonsterpassword(String monsterpassword) {
		this.monsterpassword = monsterpassword;
	}

	@Override
	public String toString() {
		return "Monster [monsterid=" + monsterid + ", monstername=" + monstername + ", monsterpassword="
				+ monsterpassword + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + monsterid;
		result = prime * result + ((monstername == null) ? 0 : monstername.hashCode());
		result = prime * result + ((monsterpassword == null) ? 0 : monsterpassword.hashCode());
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
		Monster other = (Monster) obj;
		if (monsterid != other.monsterid)
			return false;
		if (monstername == null) {
			if (other.monstername != null)
				return false;
		} else if (!monstername.equals(other.monstername))
			return false;
		if (monsterpassword == null) {
			if (other.monsterpassword != null)
				return false;
		} else if (!monsterpassword.equals(other.monsterpassword))
			return false;
		return true;
	}

}
