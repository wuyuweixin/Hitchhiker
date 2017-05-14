import { User } from "../models/user";
import { Team } from "../models/team";
import { Environment } from "../models/environment";
import { Header } from "../models/header";
import { Variable } from "../models/variable";
import { Collection } from "../models/collection";
import { Record } from "../models/record";

export interface DtoResCollection extends Collection { }

export interface DtoResRecord extends Partial<Record> { }

export interface DtoResUser extends User { }

export interface DtoResTeam extends Team { }

export interface DtoResEnvironment extends Environment { }

export interface DtoResHeader extends Header { }

export interface DtoResVariable extends Variable { }

export type DtoRecord = Partial<DtoResRecord>;
export type DtoHeader = Partial<DtoResHeader>;