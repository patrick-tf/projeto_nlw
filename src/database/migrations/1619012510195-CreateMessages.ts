import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMessages1619012510195 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "messages",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "admin_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "text",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUser", // Nome da Foreign key, pode ser qualquer um. FK por padrao
            referencedTableName: "users", // tabela de referencia, tabela de relacionamento
            referencedColumnNames: ["id"], // qual vai ser a coluna q vou relacionar
            columnNames: ["user_id"], // pra onde vai ser enviado o id referenciado
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("messages");
  }
}
