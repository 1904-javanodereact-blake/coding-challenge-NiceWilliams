package com.monster.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.monster.model.Monster;

public interface MonsterRepo extends JpaRepository<Monster, Integer> {

}
