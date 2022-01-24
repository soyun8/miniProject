package com.main.spring.board.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class BoardDto {

    private Long idx;
    private int hit_cnt;
    private String title;
    private String content;
    private LocalDateTime create_date;
    private LocalDateTime update_date;

}
