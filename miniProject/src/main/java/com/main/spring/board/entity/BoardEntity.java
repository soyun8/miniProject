package com.main.spring.board.entity;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
@DynamicInsert
@Table(name = "board")
public class BoardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idx;

    @Column
    private int hit_cnt;

    @Column
    private String title;

    @Column
    private String content;

    @Column
    @CreationTimestamp
    private LocalDateTime create_date;

    @Column
    @UpdateTimestamp
    private LocalDateTime update_date;
}
