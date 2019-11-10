import React, { Component } from 'react';
import TreeNode from './TreeNode';

const data = [
    {
      "DisplayKey": "lblDashboard",
      "Settings": [
        {
          "DisplayKey": "lblWgChartTurnOver",
          "FunctionKey": "c_turnover",
          "Enable": false,
          "Type": 3,
          "Mode": 1
        },
        {
          "DisplayKey": "lblWgChartLicenseeWL",
          "FunctionKey": "c_licWL",
          "Enable": false,
          "Type": 3,
          "Mode": 1
        },
        {
          "DisplayKey": "lblWgRegisteredCustomer",
          "FunctionKey": "n_reg_customer",
          "Enable": false,
          "Type": 3,
          "Mode": 1
        },
        {
          "DisplayKey": "lblWgOnlineCustomers",
          "FunctionKey": "c_online_customer",
          "Enable": false,
          "Type": 3,
          "Mode": 1
        },
        {
          "DisplayKey": "lblWgCustomerBalance",
          "FunctionKey": "n_customer_balance",
          "Enable": false,
          "Type": 3,
          "Mode": 1
        },
        {
          "DisplayKey": "lblWgPendingFunds",
          "FunctionKey": "n_pending_funds",
          "Enable": false,
          "Type": 3,
          "Mode": 1
        },
        {
          "DisplayKey": "lblWgDepositToday",
          "FunctionKey": "n_deposit",
          "Enable": false,
          "Type": 3,
          "Mode": 1
        },
        {
          "DisplayKey": "lblWgWithdrawToday",
          "FunctionKey": "n_withdrawal",
          "Enable": false,
          "Type": 3,
          "Mode": 1
        }
      ]
    },
    {
      "DisplayKey": "lblBettingTicketCenter",
      "Settings": [
        {
          "DisplayKey": "lblBettingTicketCenter",
          "FunctionKey": "BTC79",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        }
      ]
    },
    {
      "DisplayKey": "lblNotification",
      "Settings": [
        {
          "DisplayKey": "lblResettlement",
          "FunctionKey": "ResultAmendment_Recalculation75",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        }
      ]
    },
    {
      "DisplayKey": "lblTotalBets",
      "Settings": [
        {
          "DisplayKey": "lblHandicapOverUnderLive",
          "FunctionKey": "HandicapOverUnderLive7",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblMoneyLine",
          "FunctionKey": "MoneyLine8",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblOddEven1x2DND",
          "FunctionKey": "OddEven1x2DND9",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblCorrectScore",
          "FunctionKey": "CorrectScore10",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblTotalGoal",
          "FunctionKey": "TotalGoal11",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblMixParlay",
          "FunctionKey": "MixParlay12",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblOutright",
          "FunctionKey": "Outright13",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblHTFT",
          "FunctionKey": "HTFT14",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblFGLG",
          "FunctionKey": "FGLG15",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblCleanSheet",
          "FunctionKey": "CleanSheet16",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblDoubleChance",
          "FunctionKey": "DoubleChance17",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblHomeDrawAwayNoBet",
          "FunctionKey": "HomeDrawAwayNoBet18",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblBONTeamToScore",
          "FunctionKey": "BONteamtoscore19",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblToWinToNil",
          "FunctionKey": "Towintonil20",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lbl3WayHandicap",
          "FunctionKey": "3-WayHandicap21",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        }
      ]
    },
    {
      "DisplayKey": "lblForecast",
      "Settings": [
        {
          "DisplayKey": "lblHandicapOverUnderForecast",
          "FunctionKey": "HandicapOverUnderLive24",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lbl1X2",
          "FunctionKey": "1X225",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        }
      ]
    },
    {
      "DisplayKey": "lblReports",
      "Settings": [
        {
          "DisplayKey": "lblCustomerOnlineReport",
          "FunctionKey": "UserOnlineReport.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblCustomerDetailReport",
          "FunctionKey": "MemberReports_V2.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblCustomerEmailReport",
          "FunctionKey": "MemberReports_V2.aspx?EmailReport=True",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblAGCasinoBalance",
          "FunctionKey": "AGCasinoBalance63",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblAGCasinoWinLoss",
          "FunctionKey": "AGCasinoWinLoss62",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblCustomerBalance",
          "FunctionKey": "CustomerBalance40",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblCustomerPendingFunds",
          "FunctionKey": "CustomerPendingFunds30",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblCustomerTurnover",
          "FunctionKey": "CustomerTurnover51",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblCustomerWinLoss",
          "FunctionKey": "CustomerWinLoss29",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblGoldDeluxeWinloss",
          "FunctionKey": "GoldDeluxeWinloss65",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
  
        {
          "DisplayKey": "lblLastBetsMonitoring",
          "FunctionKey": "LastBetsMonitoring26",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblLicenseeWinLoss",
          "FunctionKey": "LicenseeWinLoss27",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblDailyBets",
          "FunctionKey": "DailyBets81",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblWinLossByTimeZone",
          "FunctionKey": "LicenseeWinLossByTimeZone76",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblLiveReport",
          "FunctionKey": "LiveReport38",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblMatchWinLoss",
          "FunctionKey": "MatchWinLoss31",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblPlatformWinLoss",
          "FunctionKey": "MobileWinLoss53",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
  
        {
          "DisplayKey": "lblResults",
          "FunctionKey": "Results41",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblSettledMatchCount",
          "FunctionKey": "SettledMatchCount28",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblTurnover",
          "FunctionKey": "Turnover39",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblWinLossByBetType",
          "FunctionKey": "WinLossByBetType33",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblWinLossByProducts",
          "FunctionKey": "WinLossByProducts32",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblWinLossByLeague",
          "FunctionKey": "WinLossByLeague59",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblWeeklyLiveMatches",
          "FunctionKey": "WeeklyLiveMatches69",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblColossusBetsWinLoss",
          "FunctionKey": "ColossusBetsWinLoss71",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblCashOutWinLoss",
          "FunctionKey": "CashOutWinLoss72",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblSubsidiaryPerformance",
          "FunctionKey": "SubsidiaryPerformance73",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblExchangeWinLoss",
          "FunctionKey": "ExchangeWinloss77",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblCasinoTurnover",
          "FunctionKey": "CasinoTurnover80",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblSubsidiaryFundQuota",
          "FunctionKey": "SubsidiaryFundQuota",
          "Enable": false,
          "Type": 3,
          "Mode": 1
        }
      ]
    },
    {
      "DisplayKey": "lblCustomerManagement",
      "Settings": [
        {
          "DisplayKey": "lblPlayerAdmin",
          "FunctionKey": "PlayerAdmin",
          "Enable": false,
          "FunctionKeys": [
            {
              "DisplayKey": "lblPlayerAdminPlayerList",
              "FunctionKey": "pa_PlayerList",
              "Mode": 1,
              "FunctionKeys": [
                {
                  "DisplayKey": "lblPlayerAdmin_PL_Status",
                  "FunctionKey": "pa_st_ctl",
                  "Mode": 1
                },
                {
                  "DisplayKey": "lblPlayerAdmin_PL_OddGroups",
                  "FunctionKey": "pa_odds_g_ctl",
                  "Mode": 1
                },
                {
                  "DisplayKey": "lblPlayerAdmin_PL_BA",
                  "FunctionKey": "pa_BA_ctl",
                  "Mode": 1
                },
                {
                  "DisplayKey": "lblPlayerAdmin_PL_SpecialLevel",
                  "FunctionKey": "pa_lv_ctl",
                  "Mode": 1
                }
              ]
            },
            {
              "DisplayKey": "lblPlayerAdminPlayerInfo",
              "FunctionKey": "pa_acc_Info",
              "Enable": false,
              "Type": 1,
              "Mode": 1
            },
            {
              "DisplayKey": "lblPlayerAdminPlayerStatement",
              "FunctionKey": "pa_statement",
              "Enable": false,
              "Type": 1,
              "Mode": 1
            },
            {
              "DisplayKey": "lblPlayerAdminBetList",
              "FunctionKey": "pa_r_bl",
              "Enable": false,
              "Type": 1,
              "Mode": 1
            },
            {
              "DisplayKey": "lblPlayerAdminFundTransfer",
              "FunctionKey": "pa_f_trans",
              "Enable": false,
              "Type": 3,
              "Mode": 1,
              "FunctionKeys": [
                {
                  "DisplayKey": "lblPlayerAdmin_FT_DepositAndWithdraw",
                  "FunctionKey": "pa_f_DepositAndWithdraw",
                  "Mode": 1
                },
                {
                  "DisplayKey": "lblPlayerAdmin_FT_TransferLog",
                  "FunctionKey": "pa_f_TransferLog",
                  "Mode": 1
                },
                {
                  "DisplayKey": "lblPlayerAdmin_FT_PlayerWallet",
                  "FunctionKey": "pa_f_PlayerWallet",
                  "Mode": 1
                }
              ]
            },
            {
              "DisplayKey": "lblPlayerAdminBetLimit",
              "FunctionKey": "pa_bet_lm",
              "Enable": false,
              "Type": 1,
              "Mode": 1,
              "InputBoxType": "radio",
              "SubFunctionKeys": [
                {
                  "DisplayKey": "ReadOnly",
                  "FunctionKey": "pa_bet_lm_r",
                  "Mode": 1
                },
                {
                  "DisplayKey": "Write",
                  "FunctionKey": "pa_bet_lm_w",
                  "Mode": 1
                }
              ]
            },
            {
              "DisplayKey": "lblPlayerAdminNote",
              "FunctionKey": "pa_note",
              "Enable": false,
              "Type": 3,
              "Mode": 1,
              "InputBoxType": "radio",
              "SubFunctionKeys": [
                {
                  "DisplayKey": "ReadOnly",
                  "FunctionKey": "ReadOnly",
                  "Mode": 1
                },
                {
                  "DisplayKey": "Write",
                  "FunctionKey": "Write",
                  "Mode": 1
                }
              ]
            },
            {
              "DisplayKey": "lblPlayerAdminLog",
              "FunctionKey": "pa_log",
              "Enable": false,
              "Type": 3,
              "Mode": 1
            },
            {
              "DisplayKey": "lblPlayerAdminMessage",
              "FunctionKey": "pa_msg",
              "Enable": false,
              "Type": 3,
              "Mode": 3,
              "InputBoxType": "radio",
              "SubFunctionKeys": [
                {
                  "DisplayKey": "ReadOnly",
                  "FunctionKey": "ReadOnly",
                  "Mode": 3
                },
                {
                  "DisplayKey": "Write",
                  "FunctionKey": "Write",
                  "Mode": 3
                }
              ]
            },
            {
              "DisplayKey": "lblPlayerAdminSetting",
              "FunctionKey": "pa_setting",
              "Enable": false,
              "Type": 3,
              "Mode": 1,
              "FunctionKeys": [
                {
                  "DisplayKey": "lblPlayerAdmin_Setting_FundTransferLimit",
                  "FunctionKey": "pa_se__FundTransferLimit",
                  "Mode": 1,
                  "InputBoxType": "radio",
                  "SubFunctionKeys": [
                    {
                      "DisplayKey": "ReadOnly",
                      "FunctionKey": "ReadOnly",
                      "Mode": 1
                    },
                    {
                      "DisplayKey": "Write",
                      "FunctionKey": "Write",
                      "Mode": 1
                    }
                  ]
                },
                {
                  "DisplayKey": "lblPlayerAdmin_Setting_BankInfo",
                  "FunctionKey": "pa_se__BankInfo",
                  "Mode": 3,
                  "InputBoxType": "radio",
                  "SubFunctionKeys": [
                    {
                      "DisplayKey": "ReadOnly",
                      "FunctionKey": "ReadOnly",
                      "Mode": 3
                    },
                    {
                      "DisplayKey": "Write",
                      "FunctionKey": "Write",
                      "Mode": 3
                    }
                  ]
                },
                {
                  "DisplayKey": "lblPlayerAdmin_Setting_ResetBankInfo",
                  "FunctionKey": "pa_se_ReSetBankInfo",
                  "Enable": false,
                  "Type": 3,
                  "Mode": 3
                },
                {
                  "DisplayKey": "lblPlayerAdmin_Setting_ResetPassword",
                  "FunctionKey": "pa_se_ResetPassword",
                  "Enable": false,
                  "Type": 3,
                  "Mode": 3
                },
                {
                  "DisplayKey": "lblPlayerAdmin_Setting_ChangePassword",
                  "FunctionKey": "pa_se_changePassword",
                  "Enable": false,
                  "Type": 3,
                  "Mode": 3
                }
              ]
            }
          ],
          "InputBoxType": "checkbox",
          "CheckedIndex": [],
          "Type": 0,
          "Mode": 1
        },
        {
          "DisplayKey": "lblCustomerLockCloseList",
          "FunctionKey": "MemberLockCloseList.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblAllCustomerExport",
          "FunctionKey": "MemberListExport_V2.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblCustomerAdministration",
          "FunctionKey": "CSD.aspx",
          "Enable": false,
          "SubFunctionKeys": [
            {
              "DisplayKey": "tdNotes",
              "FunctionKey": "tdNotes",
              "Mode": 1
            },
            {
              "DisplayKey": "tdInfo",
              "FunctionKey": "tdInfo",
              "Mode": 1
            },
            {
              "DisplayKey": "tdStatement",
              "FunctionKey": "tdStatement",
              "Mode": 1
            },
            {
              "DisplayKey": "tdBetList",
              "FunctionKey": "tdBetList",
              "Mode": 1
            },
            {
              "DisplayKey": "tdDtHistory",
              "FunctionKey": "tdDtHistory",
              "Mode": 3
            },
            {
              "DisplayKey": "tdWhHistory",
              "FunctionKey": "tdWhHistory",
              "Mode": 3
            },
            {
              "DisplayKey": "tdChangePwd",
              "FunctionKey": "tdChangePwd",
              "Mode": 3
            },
            {
              "DisplayKey": "tdResetPwd",
              "FunctionKey": "tdResetPwd",
              "Mode": 3
            },
            {
              "DisplayKey": "tdIPLog",
              "FunctionKey": "tdIPLog",
              "Mode": 3
            },
            {
              "DisplayKey": "tdUnlock",
              "FunctionKey": "tdUnlock",
              "Mode": 3
            },
            {
              "DisplayKey": "tdAccLocked",
              "FunctionKey": "tdAccLocked",
              "Mode": 3
            },
            {
              "DisplayKey": "tdAccClosed",
              "FunctionKey": "tdAccClosed",
              "Mode": 3
            },
            {
              "DisplayKey": "tdMessageHistory",
              "FunctionKey": "tdMessageHistory",
              "Mode": 3
            },
            {
              "DisplayKey": "tdManagePriMessage",
              "FunctionKey": "tdManagePriMessage",
              "Mode": 3
            },
            {
              "DisplayKey": "tdTransferList",
              "FunctionKey": "tdTransferList",
              "Mode": 2
            },
            {
              "DisplayKey": "tdTransferHistory_TP",
              "FunctionKey": "tdTransferHistory_TP",
              "Mode": 3
            },
            {
              "DisplayKey": "tdResetBonus",
              "FunctionKey": "tdResetBonus",
              "Mode": 3
            },
            {
              "DisplayKey": "tdResetUpdateBank",
              "FunctionKey": "tdResetUpdateBank",
              "Mode": 3
            },
            {
              "DisplayKey": "tdChangeMemberBank",
              "FunctionKey": "tdChangeMemberBank",
              "Mode": 3
            },
            {
              "DisplayKey": "tdReActAccount",
              "FunctionKey": "tdReActAccount",
              "Mode": 1
            }
          ],
          "InputBoxType": "checkbox",
          "CheckedIndex": [],
          "Type": 0,
          "Mode": 1
        },
        {
          "DisplayKey": "lblContactInfomation",
          "FunctionKey": "ContactInfo.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 1
        },
        {
          "DisplayKey": "lblChangeMemberDetail",
          "FunctionKey": "ChangeMemberDetail_List.aspx",
          "Enable": false,
          "SubFunctionKeys": [
            {
              "DisplayKey": "Request",
              "FunctionKey": "Request",
              "Mode": 1
            },
            {
              "DisplayKey": "Review",
              "FunctionKey": "Review",
              "Mode": 1
            },
            {
              "DisplayKey": "Process",
              "FunctionKey": "Process",
              "Mode": 1
            }
          ],
          "InputBoxType": "checkbox",
          "CheckedIndex": [],
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblCustomerList",
          "FunctionKey": "CustomerList43",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblEditBetSetting",
          "FunctionKey": "EditBetSetting70",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        },
        {
          "DisplayKey": "lblCommissionGroupList",
          "FunctionKey": "CommissionGroupList55",
          "Enable": false,
          "Type": 1,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblCustomerLog",
          "FunctionKey": "CustomerLog56",
          "Enable": false,
          "Type": 1,
          "Mode": 1
        }
      ]
    },
    {
      "DisplayKey": "lblFinance",
      "Settings": [
        {
          "DisplayKey": "lblDepositInformation",
          "FunctionKey": "Dt_Info.aspx",
          "Enable": false,
          "SubFunctionKeys": [
            {
              "DisplayKey": "ReadOnly",
              "FunctionKey": "ReadOnly",
              "Mode": 1
            },
            {
              "DisplayKey": "Write",
              "FunctionKey": "Write",
              "Mode": 1
            },
            {
              "DisplayKey": "FinanceProcess",
              "FunctionKey": "FinanceProcess",
              "Mode": 1
            }
          ],
          "InputBoxType": "radio",
          "CheckedIndex": [],
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblWithdrawalInformation",
          "FunctionKey": "Wd_Info.aspx",
          "Enable": false,
          "SubFunctionKeys": [
            {
              "DisplayKey": "ReadOnly",
              "FunctionKey": "ReadOnly",
              "Mode": 1
            },
            {
              "DisplayKey": "StaffA",
              "FunctionKey": "StaffA",
              "Mode": 1
            },
            {
              "DisplayKey": "StaffB",
              "FunctionKey": "StaffB",
              "Mode": 1
            },
            {
              "DisplayKey": "StaffC",
              "FunctionKey": "StaffC",
              "Mode": 1
            }
          ],
          "InputBoxType": "checkbox",
          "CheckedIndex": [],
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblAllExport",
          "FunctionKey": "St_Info.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblDepositWithdrawalReport",
          "FunctionKey": "DW_reports.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblBalance",
          "FunctionKey": "Balance_Statistics.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblPaymentAdjustment",
          "FunctionKey": "Payment_Adjustment.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblCurrencyLimitSettingV2",
          "FunctionKey": "Setting_CurrencyLimitV2.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        }
      ]
    },
    {
      "DisplayKey": "lblBonus",
      "Settings": [
        {
          "DisplayKey": "lblCreateBonusCode",
          "FunctionKey": "Bonus_Maintain.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblUploadBonus",
          "FunctionKey": "BonusUpload.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblBonusAdjustment",
          "FunctionKey": "Finance_BonusAdjustment.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblBonusCodeList",
          "FunctionKey": "Bonus_List.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblMassBonusInfo",
          "FunctionKey": "Bonus_MassBonus.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblBonusAdjustmentReport",
          "FunctionKey": "Finance_BonusAdjustment_report.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblBonusReport",
          "FunctionKey": "Bonus_Report.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        }
      ]
    },
    {
      "DisplayKey": "lblEventControl",
      "Settings": [
        {
          "DisplayKey": "lblMatchController",
          "FunctionKey": "Sports_MatchControl.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblBetLimitController",
          "FunctionKey": "Sports_MaxBetControl.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblLeagueRankSetting",
          "FunctionKey": "Sports_RankControl.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblSportsbookMenuSetting",
          "FunctionKey": "Sports_MenuControl.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 1,
          "MinLevel": 1
        }
      ]
    },
    {
      "DisplayKey": "lblRiskControl",
      "Settings": [
        {
          "DisplayKey": "lblParlayPayoutSetting",
          "FunctionKey": "ParlaySetting.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 1,
          "MinLevel": 1
        }
      ]
    },
    {
      "DisplayKey": "lblAffiliate",
      "FunctionKey": "AffiliateItems",
      "Settings": [
        {
          "DisplayKey": "lblAffiliateStatistics",
          "FunctionKey": "lblAffiliateStatistics",
          "Enable": false,
          "Type": 2,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblAffiliateManagement",
          "FunctionKey": "[Affiliate]",
          "Enable": false,
          "Type": 2,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblPayment",
          "FunctionKey": "[Payment]",
          "Enable": false,
          "Type": 2,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblCommissionGroup",
          "FunctionKey": "[CommissionGroup]",
          "Enable": false,
          "Type": 2,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblWinLossReport",
          "FunctionKey": "[AffReport]",
          "Enable": false,
          "Type": 2,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblMarketingTools",
          "FunctionKey": "[Media]",
          "Enable": false,
          "Type": 2,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblMessage",
          "FunctionKey": "[HotNews]",
          "Enable": false,
          "Type": 2,
          "Mode": 1,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblCurrency",
          "FunctionKey": "[AffEx.Rate]",
          "Enable": false,
          "Type": 2,
          "Mode": 1,
          "MinLevel": 1
        }
      ]
    },
    {
      "DisplayKey": "lblAdministration",
      "Settings": [
        {
          "DisplayKey": "lblSubsidiaryManagement",
          "FunctionKey": "SubsidiaryManage",
          "Enable": false,
          "Type": 3,
          "Mode": 2,
          "MinLevel": 1
        },
        {
          "DisplayKey": "lblSystemGroupAuthority",
          "FunctionKey": "UserGroupList.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 1
        },
        {
          "DisplayKey": "lblAuthorized",
          "FunctionKey": "Authorized.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 1
        },
        {
          "DisplayKey": "lblRedirectHostSetting",
          "FunctionKey": "RedirectHost.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 1,
          "MinLevel": 0
        },
        {
          "DisplayKey": "lblIPWhiteListSetting",
          "FunctionKey": "WhiteList.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 1,
          "MinLevel": 0
        },
        {
          "DisplayKey": "lblTransferListReport",
          "FunctionKey": "Report_Transfer.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 2
        },
        {
          "DisplayKey": "lblFrontendTabLinkSetting",
          "FunctionKey": "HeadTab_LinkControl.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3,
          "MinLevel": 0
        },
        {
          "DisplayKey": "lblFrontendUserBankDetail",
          "FunctionKey": "MemberBankDetail_Maintain.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        },
        {
          "DisplayKey": "lblDepositBankDetail",
          "FunctionKey": "BankDetail_Maintain.aspx",
          "Enable": false,
          "Type": 0,
          "Mode": 3
        }
      ]
    },
    {
      "DisplayKey": "lblNewBonusSystem",
      "FunctionKey": "New_Bonus_System",
      "Settings": [
        {
          "DisplayKey": "lblNewCreateBonus",
          "FunctionKey": "NEW_Create_Bonus",
          "Enable": false,
          "Type": 3,
          "Mode": 1
        },
        {
          "DisplayKey": "lblNewBonusManagement",
          "FunctionKey": "NEW_Bonus_Management",
          "Enable": false,
          "Type": 3,
          "Mode": 1
        },
        {
          "DisplayKey": "lblNewBonusReport",
          "FunctionKey": "NEW_Bonus_Report",
          "Enable": false,
          "Type": 3,
          "Mode": 1
        },
        {
          "DisplayKey": "lblNewExpiringBonusReport",
          "FunctionKey": "NEW_Expiring_BonusReport",
          "Enable": false,
          "Type": 3,
          "Mode": 1
        },
        {
          "DisplayKey": "lblNewMemberBonusReport",
          "FunctionKey": "New_Member_Bonus_Report",
          "Enable": false,
          "Type": 3,
          "Mode": 1
        },
        {
          "DisplayKey": "lblNewCancelExtendBonus",
          "FunctionKey": "New_Cancel_Extend_Bonus",
          "Enable": false,
          "Type": 3,
          "Mode": 1
        }
      ]
    }
  ]

export default class Tree extends Component {

    state = {
        nodes: data
    };

    getRootNodes = () => {
        const { nodes } = JSON.parse(JSON.stringify(this.state));
        return nodes;
    }

    getChildNodes = (node) => {
        if (!node.Settings){
            if(!node.FunctionKeys){
                return []
            }
            return node.FunctionKeys
        }
        return node.Settings
    }

    hanfleClick= (node, index, level) => {
      const { nodes } = this.state;
      var child = this.getChildNodes(node);
      
      if(level.length == 1 && child != null){
       
        nodes[index].isCheck = !nodes[index].isCheck; 
        if(child != null){
        child.map((c, i) => {
          console.log("  1")
          var lv = level;
          this.hanfleClick(c, i, lv.concat(i)) 
        })
        }
      }
      if(level.length == 2 ){
      if(( nodes[level[0]].Settings[level[1]])) {
  
        nodes[level[0]].Settings[level[1]].isCheck = !nodes[level[0]].Settings[level[1]].isCheck;
        console.log("defi")
      }
      
       if(child != null){
        var lv = level;
        child.map((c, i) => this.hanfleClick(c, i, lv.concat(i)))
       }
      
    //   child.map((c, i) => nodes[index].Settings[i].isCheck = !nodes[index].Settings[i].isCheck )
      }
     
      console.log("setState")
      this.setState({ nodes });
    }

    onNodeSelect = (key, level) => {
       
        this.setState({ nodes: this.setLevel(key, level) });
    }

    setLevel(key, level){
      const { nodes } = this.state;

      if(level.length == 1){
        nodes[key].isOpen = !nodes[key].isOpen;
        nodes[key].level = JSON.parse("[" + key + "]");
      }
      if(level.length == 2){
        nodes[level[0]].Settings[level[1]].isOpen = !nodes[level[0]].Settings[level[1]].isOpen;
        nodes[level[0]].Settings[level[1]].level = level
      }
      if(level.length == 3){
        nodes[level[0]].Settings[level[1]].FunctionKeys[level[2]].isOpen = !nodes[level[0]].Settings[level[1]].FunctionKeys[level[2]].isOpen;
        nodes[level[0]].Settings[level[1]].FunctionKeys[level[2]].level = level
      }
      
      return nodes;
    }

    render() {
        console.log("re")
        const rootNodes = this.getRootNodes();
        
        return (
            <div>
                {rootNodes.map((node, i) => (
                    <TreeNode
                        key={i}
                        index={i}
                        level={[0]}
                        node={node}
                        getChildNodes={this.getChildNodes}
                        onToggle={this.onToggle}
                        onNodeSelect={this.onNodeSelect}
                        hanfleClick={this.hanfleClick}
                    />
                ))}
            </div>
        )
    }
}
