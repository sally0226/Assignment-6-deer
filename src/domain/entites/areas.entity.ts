import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("areas")
export class UserKickboardHistories {

    @PrimaryGeneratedColumn({ name: "area_id", type: "int" })
    areaId: number;

    @Column({ name: "area_bounday", type: "polygon", nullable: false })
    areaBoundary: string;

    @Column({ name: "area_center", type: "point", nullable: false })
    areaCenter: number;

    @CreateDateColumn({ name: "created_at", type: "date", default: Date.now(), nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at", type: "date", default: Date.now(), nullable: false })
    updatedAt: Date;
}