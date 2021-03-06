import { InMemoryDbService } from 'angular-in-memory-web-api';
import {User} from './user';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const USERS = [
            { id: 164,
                account_id: 'anton',
                nickname: 'Vitenka',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-22 19:28:56.027485',
                last_login_dt: '2018-03-23 15:51:43.206051',
                verified_dt: null,
                active_days: 2,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 41210,
                total_play_time: 2094,
                settings: null,
                zone_id: 1,
                gold: 10,
                silver: 1300,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 15:52:12.64931',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 174,
                account_id: 'kosvas12',
                nickname: 'kosvas12',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 11:00:53.851447',
                last_login_dt: '2018-03-23 11:00:54.47103',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 43131,
                total_play_time: 69,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 11:01:34.585967',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 184,
                account_id: 'g10153181653008456203',
                nickname: 'SuperDuperArtist21',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 16:21:06.345888',
                last_login_dt: '2018-03-23 16:21:07.065719',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 39580,
                total_play_time: 3620,
                settings: null,
                zone_id: 1,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 16:51:23.848435',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 176,
                account_id: 'kosvas14',
                nickname: 'kosvas14',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 11:19:24.233801',
                last_login_dt: '2018-03-23 11:20:04.430142',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 43096,
                total_play_time: 104,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 11:20:37.940295',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 159,
                account_id: 'kosvas',
                nickname: 'kosvas',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-22 12:00:13.961373',
                last_login_dt: '2018-03-22 12:00:19.790687',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 43200,
                total_play_time: 0,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-22 12:00:31.315197',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 179,
                account_id: 'anton1',
                nickname: 'Vitenka',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 11:58:21.846916',
                last_login_dt: '2018-03-23 14:41:50.945059',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 42026,
                total_play_time: 1174,
                settings: null,
                zone_id: 1,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 14:43:24.838523',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 163,
                account_id: '123456712312311',
                nickname: 'HujuJebanyVRotSukaTupaja',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-22 18:28:29.922694',
                last_login_dt: '2018-03-24 12:16:50.00926',
                verified_dt: null,
                active_days: 3,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 41500,
                total_play_time: 24330,
                settings: null,
                zone_id: 1,
                gold: 10,
                silver: 1700,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-24 12:20:01.173979',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 168,
                account_id: 'kosvas6',
                nickname: 'kosvas6',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 07:19:24.068852',
                last_login_dt: '2018-03-23 07:24:14.883132',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 42437,
                total_play_time: 763,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 07:28:50.238094',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 160,
                account_id: 'kosvas2',
                nickname: 'kosvas2',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-22 12:05:38.138334',
                last_login_dt: '2018-03-22 12:05:38.666746',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 43200,
                total_play_time: 0,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-22 12:05:43.509526',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 173,
                account_id: 'kosvas11',
                nickname: 'kosvas11',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 10:52:32.750493',
                last_login_dt: '2018-03-23 10:52:33.260993',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 43115,
                total_play_time: 85,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 10:53:21.06634',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 165,
                account_id: 'g07569229402359604963',
                nickname: 'WideEyedGoblin45841',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-22 22:24:12.449961',
                last_login_dt: '2018-03-24 11:49:53.849994',
                verified_dt: null,
                active_days: 3,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 18267,
                total_play_time: 54799,
                settings: null,
                zone_id: 1,
                gold: 10,
                silver: 1400,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-24 13:56:18.285814',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 161,
                account_id: 'kosvas3',
                nickname: 'kosvas3',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-22 12:12:45.125608',
                last_login_dt: '2018-03-22 12:12:45.847553',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 43200,
                total_play_time: 0,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-22 12:12:59.764135',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 158,
                account_id: 'anton20111',
                nickname: 'Anton',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-22 11:36:01.605897',
                last_login_dt: '2018-03-22 12:13:57.193246',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 43200,
                total_play_time: 0,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 900,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-22 12:14:01.371044',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 169,
                account_id: 'kosvas7',
                nickname: 'kosvas7',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 07:40:38.401618',
                last_login_dt: '2018-03-23 07:40:43.977966',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 42948,
                total_play_time: 252,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 07:43:00.84882',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 166,
                account_id: 'kosvas4',
                nickname: 'kosvas4',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 06:43:30.063556',
                last_login_dt: '2018-03-23 06:43:30.40981',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 41266,
                total_play_time: 1934,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 900,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 07:00:54.967174',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 170,
                account_id: 'kosvas8',
                nickname: 'kosvas8',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 07:45:09.82614',
                last_login_dt: '2018-03-23 08:56:20.44388',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 42143,
                total_play_time: 1057,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 08:56:56.633099',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 175,
                account_id: 'kosvas13',
                nickname: 'kosvas13',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 11:07:26.347417',
                last_login_dt: '2018-03-23 11:07:26.86131',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 43097,
                total_play_time: 103,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 11:08:23.793406',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 167,
                account_id: 'kosvas5',
                nickname: 'kosvas5',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 07:06:07.539089',
                last_login_dt: '2018-03-23 07:06:13.167392',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 41806,
                total_play_time: 1394,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 07:18:16.790008',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 182,
                account_id: 'g12716946517771568240',
                nickname: 'qlex2001',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 16:05:36.293409',
                last_login_dt: '2018-03-23 18:11:26.349777',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 39112,
                total_play_time: 4088,
                settings: null,
                zone_id: 1,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 18:27:55.55848',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 172,
                account_id: 'kosvas10',
                nickname: 'kosvas10',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 10:32:20.179359',
                last_login_dt: '2018-03-23 10:32:20.634346',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 43142,
                total_play_time: 58,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 10:32:55.012505',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 180,
                account_id: 'anton2',
                nickname: 'Vitenka',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 11:58:24.429629',
                last_login_dt: '2018-03-23 14:43:39.300574',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 42312,
                total_play_time: 888,
                settings: null,
                zone_id: 1,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 14:43:52.013218',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 177,
                account_id: 'kosvas15',
                nickname: 'kosvas15',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 11:21:31.494575',
                last_login_dt: '2018-03-23 11:21:32.016826',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 43142,
                total_play_time: 58,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 11:22:15.44184',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 171,
                account_id: 'kosvas9',
                nickname: 'kosvas9',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 10:03:46.570728',
                last_login_dt: '2018-03-23 10:03:47.16999',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 43096,
                total_play_time: 104,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 10:04:47.783194',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 178,
                account_id: 'kosvas16',
                nickname: 'kosvas16',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 11:31:18.295951',
                last_login_dt: '2018-03-23 11:31:18.720816',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 43120,
                total_play_time: 80,
                settings: null,
                zone_id: 2,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 11:32:06.798453',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 183,
                account_id: 'g09239037833239896292',
                nickname: 'StingingKey82',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 16:16:38.452182',
                last_login_dt: '2018-03-24 10:52:04.606928',
                verified_dt: null,
                active_days: 2,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 41705,
                total_play_time: 3415,
                settings: null,
                zone_id: 1,
                gold: 10,
                silver: 1300,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-24 11:04:34.941159',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 181,
                account_id: 'kosvas17',
                nickname: 'kosvas17',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-23 13:00:31.484037',
                last_login_dt: '2018-03-23 14:42:55.851642',
                verified_dt: null,
                active_days: 1,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 42776,
                total_play_time: 424,
                settings: null,
                zone_id: 1,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 14:42:58.496952',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            },
            {
                id: 162,
                account_id: 'anton201111',
                nickname: 'Anton',
                password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
                created_dt: '2018-03-22 12:14:18.040438',
                last_login_dt: '2018-03-23 15:50:50.790991',
                verified_dt: null,
                active_days: 2,
                moderator: 'f',
                ban: 'f',
                ban_reason: null,
                ban_end_dt: null,
                network_id: 1,
                play_time_left: 38025,
                total_play_time: 9786,
                settings: null,
                zone_id: 1,
                gold: 10,
                silver: 1000,
                active: 't',
                reference: 0,
                updated_dt: '2018-03-23 15:52:10.40229',
                nickname_changed: 'f',
                gold_contests_unlocked: 'f',
                shards: 0
            }
        ];
        return {USERS};
    }
}