package com.main.spring.board.entity;

import com.main.spring.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {

    @Modifying
    @Query("update Board b set b.hit_cnt = b.hit_cnt + 1 where b.id = :id")
    int hitUpdate(Long id);
}
