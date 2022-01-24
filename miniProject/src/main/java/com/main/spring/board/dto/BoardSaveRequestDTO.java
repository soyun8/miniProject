package com.main.spring.board.dto;


import com.main.spring.board.entity.Board;
import lombok.Builder;
import lombok.Getter;


@Getter
public class BoardSaveRequestDTO {
    private String title;
    private String content;


    @Builder
    public BoardSaveRequestDTO(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public Board toEntity(){
        return Board.builder()
                .title(title)
                .content(content)
                .build();
    }
}
