import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { type } from "os";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_tema"})
    export class Tema{

        @PrimaryGeneratedColumn('increment')
        @ApiProperty()
        id: number
        
        @IsNotEmpty()
        @Column({length: 100, nullable: false})
        @ApiProperty()
        titulo: string

        @IsNotEmpty()
        @Column({length: 100, nullable: false})
        categoria: string

        @ApiProperty({type: () => Postagem})

        @OneToMany( () => Postagem, (postagem) => postagem.tema)
        postagem: Postagem []

        
 }
