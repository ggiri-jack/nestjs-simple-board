import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1704526835072 implements MigrationInterface {
    name = 'Migration1704526835072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "boardCount" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "boardCount"`);
    }

}
