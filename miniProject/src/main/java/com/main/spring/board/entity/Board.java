package com.main.spring.board.entity;


import com.main.spring.board.AuditingEntity;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "board")
public class Board extends AuditingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

//    @Column(name = "create_date")
//    private LocalDateTime create_date;
//
//    @Column(name = "update_date")
//    private LocalDateTime update_date;

    @Column(name = "hit_cnt")
    @ColumnDefault("0")
    private int hit_cnt;

    @Builder
    public Board(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
