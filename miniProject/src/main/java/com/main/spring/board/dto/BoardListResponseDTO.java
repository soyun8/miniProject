package com.main.spring.board.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class BoardListResponseDTO {

    private Long id;
    private String title;
    private LocalDateTime create_date;
    private int hit_cnt;

    public BoardListResponseDTO(Long id, String title, LocalDateTime create_date, int hit_cnt) {
        this.id = id;
        this.title = title;
        this.create_date = create_date;
        this.hit_cnt = hit_cnt;
    }
}
