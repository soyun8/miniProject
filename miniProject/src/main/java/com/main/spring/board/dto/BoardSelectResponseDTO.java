package com.main.spring.board.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Getter
@AllArgsConstructor

public class BoardSelectResponseDTO {
    private String title;
    private String content;


}
