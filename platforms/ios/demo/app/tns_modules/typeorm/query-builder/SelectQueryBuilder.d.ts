
import { ObjectLiteral } from "../common/ObjectLiteral";
import { QueryBuilder } from "./QueryBuilder";
import { SelectQuery } from "./SelectQuery";
import { EntityMetadata } from "../metadata/EntityMetadata";
import { OrderByCondition } from "../find-options/OrderByCondition";
import { QueryExpressionMap } from "./QueryExpressionMap";
import { ObjectType } from "../common/ObjectType";
import { QueryRunner } from "../query-runner/QueryRunner";
import { WhereExpression } from "./WhereExpression";
import { Brackets } from "./Brackets";
/**
 * Allows to build complex sql queries in a fashion way and execute those queries.
 */
export declare class SelectQueryBuilder<Entity> extends QueryBuilder<Entity> implements WhereExpression {
    /**
     * Gets generated sql query without parameters being replaced.
     */
    getQuery(): string;
    /**
     * Creates a subquery - query that can be used inside other queries.
     */
    subQuery(): SelectQueryBuilder<any>;
    /**
     * Creates SELECT query.
     * Replaces all previous selections if they exist.
     */
    select(): this;
    /**
     * Creates SELECT query.
     * Replaces all previous selections if they exist.
     */
    select(selection: (qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>, selectionAliasName?: string): this;
    /**
     * Creates SELECT query and selects given data.
     * Replaces all previous selections if they exist.
     */
    select(selection: string, selectionAliasName?: string): this;
    /**
     * Creates SELECT query and selects given data.
     * Replaces all previous selections if they exist.
     */
    select(selection: string[]): this;
    /**
     * Adds new selection to the SELECT query.
     */
    addSelect(selection: (qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>, selectionAliasName?: string): this;
    /**
     * Adds new selection to the SELECT query.
     */
    addSelect(selection: string, selectionAliasName?: string): this;
    /**
     * Adds new selection to the SELECT query.
     */
    addSelect(selection: string[]): this;
    /**
     * Specifies FROM which entity's table select/update/delete will be executed.
     * Also sets a main string alias of the selection data.
     * Removes all previously set from-s.
     */
    from<T>(entityTarget: (qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>, aliasName: string): SelectQueryBuilder<T>;
    /**
     * Specifies FROM which entity's table select/update/delete will be executed.
     * Also sets a main string alias of the selection data.
     * Removes all previously set from-s.
     */
    from<T>(entityTarget: ObjectType<T> | string, aliasName: string): SelectQueryBuilder<T>;
    /**
     * Specifies FROM which entity's table select/update/delete will be executed.
     * Also sets a main string alias of the selection data.
     */
    addFrom<T>(entityTarget: (qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>, aliasName: string): SelectQueryBuilder<T>;
    /**
     * Specifies FROM which entity's table select/update/delete will be executed.
     * Also sets a main string alias of the selection data.
     */
    addFrom<T>(entityTarget: ObjectType<T> | string, aliasName: string): SelectQueryBuilder<T>;
    /**
     * INNER JOINs (without selection) given subquery.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoin(subQueryFactory: (qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * INNER JOINs (without selection) entity's property.
     * Given entity property should be a relation.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoin(property: string, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * INNER JOINs (without selection) given entity's table.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoin(entity: Function | string, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * INNER JOINs (without selection) given table.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoin(tableName: string, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs (without selection) given subquery.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoin(subQueryFactory: (qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs (without selection) entity's property.
     * Given entity property should be a relation.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoin(property: string, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs (without selection) entity's table.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoin(entity: Function | string, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs (without selection) given table.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoin(tableName: string, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * INNER JOINs given subquery and adds all selection properties to SELECT..
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoinAndSelect(subQueryFactory: (qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * INNER JOINs entity's property and adds all selection properties to SELECT.
     * Given entity property should be a relation.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoinAndSelect(property: string, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * INNER JOINs entity and adds all selection properties to SELECT.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoinAndSelect(entity: Function | string, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * INNER JOINs table and adds all selection properties to SELECT.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoinAndSelect(tableName: string, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs given subquery and adds all selection properties to SELECT..
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoinAndSelect(subQueryFactory: (qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs entity's property and adds all selection properties to SELECT.
     * Given entity property should be a relation.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoinAndSelect(property: string, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs entity and adds all selection properties to SELECT.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoinAndSelect(entity: Function | string, aliasName: string, condition: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs table and adds all selection properties to SELECT.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoinAndSelect(tableName: string, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * INNER JOINs given subquery, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there are multiple rows of selecting data, and mapped result will be an array.
     * Given entity property should be a relation.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoinAndMapMany(mapToProperty: string, subQueryFactory: (qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * INNER JOINs entity's property, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there are multiple rows of selecting data, and mapped result will be an array.
     * Given entity property should be a relation.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoinAndMapMany(mapToProperty: string, property: string, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * INNER JOINs entity's table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there are multiple rows of selecting data, and mapped result will be an array.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoinAndMapMany(mapToProperty: string, entity: Function | string, aliasName: string, condition: string, parameters?: ObjectLiteral): this;
    /**
     * INNER JOINs table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there are multiple rows of selecting data, and mapped result will be an array.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoinAndMapMany(mapToProperty: string, tableName: string, aliasName: string, condition: string, parameters?: ObjectLiteral): this;
    /**
     * INNER JOINs given subquery, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
     * Given entity property should be a relation.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoinAndMapOne(mapToProperty: string, subQueryFactory: (qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * INNER JOINs entity's property, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
     * Given entity property should be a relation.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoinAndMapOne(mapToProperty: string, property: string, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * INNER JOINs entity's table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoinAndMapOne(mapToProperty: string, entity: Function | string, aliasName: string, condition: string, parameters?: ObjectLiteral): this;
    /**
     * INNER JOINs table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    innerJoinAndMapOne(mapToProperty: string, tableName: string, aliasName: string, condition: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs given subquery, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there are multiple rows of selecting data, and mapped result will be an array.
     * Given entity property should be a relation.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoinAndMapMany(mapToProperty: string, subQueryFactory: (qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs entity's property, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there are multiple rows of selecting data, and mapped result will be an array.
     * Given entity property should be a relation.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoinAndMapMany(mapToProperty: string, property: string, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs entity's table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there are multiple rows of selecting data, and mapped result will be an array.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoinAndMapMany(mapToProperty: string, entity: Function | string, aliasName: string, condition: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there are multiple rows of selecting data, and mapped result will be an array.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoinAndMapMany(mapToProperty: string, tableName: string, aliasName: string, condition: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs given subquery, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
     * Given entity property should be a relation.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoinAndMapOne(mapToProperty: string, subQueryFactory: (qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs entity's property, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
     * Given entity property should be a relation.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoinAndMapOne(mapToProperty: string, property: string, aliasName: string, condition?: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs entity's table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoinAndMapOne(mapToProperty: string, entity: Function | string, aliasName: string, condition: string, parameters?: ObjectLiteral): this;
    /**
     * LEFT JOINs table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
     * This is extremely useful when you want to select some data and map it to some virtual property.
     * It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
     * You also need to specify an alias of the joined data.
     * Optionally, you can add condition and parameters used in condition.
     */
    leftJoinAndMapOne(mapToProperty: string, tableName: string, aliasName: string, condition: string, parameters?: ObjectLiteral): this;
    /**
     */
    /**
     */
    /**
     */
    /**
     */
    /**
     * LEFT JOINs relation id and maps it into some entity's property.
     * Optionally, you can add condition and parameters used in condition.
     */
    loadRelationIdAndMap(mapToProperty: string, relationName: string): this;
    /**
     * LEFT JOINs relation id and maps it into some entity's property.
     * Optionally, you can add condition and parameters used in condition.
     */
    loadRelationIdAndMap(mapToProperty: string, relationName: string, options: {
        disableMixedMap: boolean;
    }): this;
    /**
     * LEFT JOINs relation id and maps it into some entity's property.
     * Optionally, you can add condition and parameters used in condition.
     */
    loadRelationIdAndMap(mapToProperty: string, relationName: string, aliasName: string, queryBuilderFactory: (qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>): this;
    /**
     * Counts number of entities of entity's relation and maps the value into some entity's property.
     * Optionally, you can add condition and parameters used in condition.
     */
    loadRelationCountAndMap(mapToProperty: string, relationName: string, aliasName?: string, queryBuilderFactory?: (qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>): this;
    /**
     * Loads all relation ids for all relations of the selected entity.
     * All relation ids will be mapped to relation property themself.
     */
    loadAllRelationIds(): this;
    /**
     * Sets WHERE condition in the query builder.
     * If you had previously WHERE expression defined,
     * calling this function will override previously set WHERE conditions.
     * Additionally you can add parameters used in where expression.
     */
    where(where: Brackets | string | ((qb: this) => string), parameters?: ObjectLiteral): this;
    /**
     * Adds new AND WHERE condition in the query builder.
     * Additionally you can add parameters used in where expression.
     */
    andWhere(where: string | Brackets | ((qb: this) => string), parameters?: ObjectLiteral): this;
    /**
     * Adds new OR WHERE condition in the query builder.
     * Additionally you can add parameters used in where expression.
     */
    orWhere(where: Brackets | string | ((qb: this) => string), parameters?: ObjectLiteral): this;
    /**
     * Adds new AND WHERE with conditions for the given ids.
     *
     * Ids are mixed.
     * It means if you have single primary key you can pass a simple id values, for example [1, 2, 3].
     * If you have multiple primary keys you need to pass object with property names and values specified,
     * for example [{ firstId: 1, secondId: 2 }, { firstId: 2, secondId: 3 }, ...]
     */
    whereInIds(ids: any[]): this;
    /**
     * Adds new AND WHERE with conditions for the given ids.
     *
     * Ids are mixed.
     * It means if you have single primary key you can pass a simple id values, for example [1, 2, 3].
     * If you have multiple primary keys you need to pass object with property names and values specified,
     * for example [{ firstId: 1, secondId: 2 }, { firstId: 2, secondId: 3 }, ...]
     */
    andWhereInIds(ids: any[]): this;
    /**
     * Adds new OR WHERE with conditions for the given ids.
     *
     * Ids are mixed.
     * It means if you have single primary key you can pass a simple id values, for example [1, 2, 3].
     * If you have multiple primary keys you need to pass object with property names and values specified,
     * for example [{ firstId: 1, secondId: 2 }, { firstId: 2, secondId: 3 }, ...]
     */
    orWhereInIds(ids: any[]): this;
    /**
     * Sets HAVING condition in the query builder.
     * If you had previously HAVING expression defined,
     * calling this function will override previously set HAVING conditions.
     * Additionally you can add parameters used in where expression.
     */
    having(having: string, parameters?: ObjectLiteral): this;
    /**
     * Adds new AND HAVING condition in the query builder.
     * Additionally you can add parameters used in where expression.
     */
    andHaving(having: string, parameters?: ObjectLiteral): this;
    /**
     * Adds new OR HAVING condition in the query builder.
     * Additionally you can add parameters used in where expression.
     */
    orHaving(having: string, parameters?: ObjectLiteral): this;
    /**
     * Sets GROUP BY condition in the query builder.
     * If you had previously GROUP BY expression defined,
     * calling this function will override previously set GROUP BY conditions.
     */
    groupBy(): this;
    /**
     * Sets GROUP BY condition in the query builder.
     * If you had previously GROUP BY expression defined,
     * calling this function will override previously set GROUP BY conditions.
     */
    groupBy(groupBy: string): this;
    /**
     * Adds GROUP BY condition in the query builder.
     */
    addGroupBy(groupBy: string): this;
    /**
     * Sets ORDER BY condition in the query builder.
     * If you had previously ORDER BY expression defined,
     * calling this function will override previously set ORDER BY conditions.
     *
     * Calling order by without order set will remove all previously set order bys.
     */
    orderBy(): this;
    /**
     * Sets ORDER BY condition in the query builder.
     * If you had previously ORDER BY expression defined,
     * calling this function will override previously set ORDER BY conditions.
     */
    orderBy(sort: string, order?: "ASC" | "DESC", nulls?: "NULLS FIRST" | "NULLS LAST"): this;
    /**
     * Sets ORDER BY condition in the query builder.
     * If you had previously ORDER BY expression defined,
     * calling this function will override previously set ORDER BY conditions.
     */
    orderBy(order: OrderByCondition): this;
    /**
     * Adds ORDER BY condition in the query builder.
     */
    addOrderBy(sort: string, order?: "ASC" | "DESC", nulls?: "NULLS FIRST" | "NULLS LAST"): this;
    /**
     * Set's LIMIT - maximum number of rows to be selected.
     * NOTE that it may not work as you expect if you are using joins.
     * If you want to implement pagination, and you are having join in your query,
     * then use instead take method instead.
     */
    limit(limit?: number): this;
    /**
     * Set's OFFSET - selection offset.
     * NOTE that it may not work as you expect if you are using joins.
     * If you want to implement pagination, and you are having join in your query,
     * then use instead skip method instead.
     */
    offset(offset?: number): this;
    /**
     * Sets maximal number of entities to take.
     */
    take(take?: number): this;
    /**
     * Sets number of entities to skip.
     */
    skip(skip?: number): this;
    /**
     * Sets locking mode.
     */
    setLock(lockMode: "optimistic", lockVersion: number): this;
    /**
     * Sets locking mode.
     */
    setLock(lockMode: "optimistic", lockVersion: Date): this;
    /**
     * Sets locking mode.
     */
    setLock(lockMode: "pessimistic_read" | "pessimistic_write"): this;
    /**
     * Gets first raw result returned by execution of generated query builder sql.
     */
    getRawOne(): Promise<any>;
    /**
     * Gets all raw results returned by execution of generated query builder sql.
     */
    getRawMany(): Promise<any[]>;
    /**
     * Executes sql generated by query builder and returns object with raw results and entities created from them.
     */
    getRawAndEntities(): Promise<{
        entities: Entity[];
        raw: any[];
    }>;
    /**
     * Gets single entity returned by execution of generated query builder sql.
     */
    getOne(): Promise<Entity | undefined>;
    /**
     * Gets entities returned by execution of generated query builder sql.
     */
    getMany(): Promise<Entity[]>;
    /**
     * Gets count - number of entities selected by sql generated by this query builder.
     * Count excludes all limitations set by setFirstResult and setMaxResults methods call.
     */
    getCount(): Promise<number>;
    /**
     * Executes built SQL query and returns entities and overall entities count (without limitation).
     * This method is useful to build pagination.
     */
    getManyAndCount(): Promise<[Entity[], number]>;
    /**
     * Executes built SQL query and returns raw data stream.
     */
    stream(): Promise<any>;
    /**
     * Enables or disables query result caching.
     */
    cache(enabled: boolean): this;
    /**
     * Enables query result caching and sets in milliseconds in which cache will expire.
     * If not set then global caching time will be used.
     */
    cache(milliseconds: number): this;
    /**
     * Enables query result caching and sets cache id and milliseconds in which cache will expire.
     */
    cache(id: any, milliseconds?: number): this;
    protected join(direction: "INNER" | "LEFT", entityOrProperty: Function | string | ((qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>), aliasName: string, condition?: string, parameters?: ObjectLiteral, mapToProperty?: string, isMappingMany?: boolean): void;
    /**
     * Creates "SELECT FROM" part of SQL query.
     */
    protected createSelectExpression(): string;
    /**
     * Creates "JOIN" part of SQL query.
     */
    protected createJoinExpression(): string;
    /**
     * Creates "GROUP BY" part of SQL query.
     */
    protected createGroupByExpression(): string;
    /**
     * Creates "ORDER BY" part of SQL query.
     */
    protected createOrderByExpression(): string;
    /**
     * Creates "LIMIT" and "OFFSET" parts of SQL query for Oracle database.
     */
    protected createLimitOffsetOracleSpecificExpression(sql: string): string;
    /**
     * Creates "LIMIT" and "OFFSET" parts of SQL query.
     */
    protected createLimitOffsetExpression(): string;
    /**
     * Creates "LOCK" part of SQL query.
     */
    protected createLockExpression(): string;
    /**
     * Creates "HAVING" part of SQL query.
     */
    protected createHavingExpression(): string;
    protected buildEscapedEntityColumnSelects(aliasName: string, metadata: EntityMetadata): SelectQuery[];
    protected findEntityColumnSelects(aliasName: string, metadata: EntityMetadata): SelectQuery[];
    protected executeCountQuery(queryRunner: QueryRunner): Promise<number>;
    /**
     * Executes sql generated by query builder and returns object with raw results and entities created from them.
     */
    protected executeEntitiesAndRawResults(queryRunner: QueryRunner): Promise<{
        entities: Entity[];
        raw: any[];
    }>;
    protected createOrderByCombinedWithSelectExpression(parentAlias: string): [string, OrderByCondition];
    /**
     * Loads raw results from the database.
     */
    protected loadRawResults(queryRunner: QueryRunner): Promise<any>;
    /**
     * Merges into expression map given expression map properties.
     */
    protected mergeExpressionMap(expressionMap: Partial<QueryExpressionMap>): this;
    /**
     * Creates a query builder used to execute sql queries inside this query builder.
     */
    protected obtainQueryRunner(): QueryRunner;
}
