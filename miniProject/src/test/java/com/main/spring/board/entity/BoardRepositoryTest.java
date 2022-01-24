package com.main.spring.board.entity;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
class BoardRepositoryTest {

    @Autowired
    BoardRepository boardRepository;

    @AfterEach
    public void clean(){
        boardRepository.deleteAll();
    }

    @Test
    public void findAll() throws Exception{
        //given
        List<Board> find = boardRepository.findAll();
        //when

        //then
        Assertions.assertThat(find.size()).isEqualTo(0);
    }
    @Test
    public void save_board() throws Exception{
        //given
        String title = "Test title";
        String content = "Test content";

        boardRepository.save(Board.builder()
                .title(title)
                .content(content)
                .build());
        //when
        List<Board> boards = boardRepository.findAll();

        //then
        Board board = boards.get(2);
        Assertions.assertThat(board.getTitle()).isEqualTo(title);
        Assertions.assertThat(board.getContent()).isEqualTo(content);
        Assertions.assertThat(board.getHit_cnt()).isEqualTo(0);
    }

}