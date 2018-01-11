using System;
using System.Collections.Generic;
using Vouchers;
using VouchersAPI.Common;
using Xunit;

namespace VouchersTest
{
    public class VouchersValidatorTests
    {
        private VoucherViewModel data;
        public VouchersValidatorTests()
        {
            data = GetMockData();
        }

        [Fact]
        public void SumVoucherEqualsVoucherDetailsSum()
        {
            Assert.Equal(VoucherValidator.Validate(data.CurrentVoucher), true);
        }

        [Fact]
        public void SumVoucherNotEqualsVoucherDetailsSumIsNotValid()
        {
            var details = data.CurrentVoucher.Details;
            details.Add(new VoucherDetail { VoucherID = data.CurrentVoucher.ID, Text = "USB Stick", Amount = 22, AccountID = 1 });
            Assert.Equal(VoucherValidator.Validate(data.CurrentVoucher), false);
        }

        [Fact]
        public void VoucherNullIsNotValid()
        {
            Assert.Equal(VoucherValidator.Validate(null), false);
        }

        [Fact]
        public void VoucherWithDetailsNullNotValid()
        {
            Assert.Equal(VoucherValidator.Validate(data.CurrentVoucher), false);
        }

        private static VoucherViewModel GetMockData()
        {
            VoucherViewModel vdvm = new VoucherViewModel
            {
                CurrentVoucher = new Voucher
                {
                    Date = DateTime.Now.AddDays(-3),
                    Amount = 40,
                    Text = "Media Markt",
                    Paid = true,
                    Expense = true
                },
                Accounts = GetAccounts()
            };
            vdvm.CurrentVoucher.Details = GetDetails(vdvm.CurrentVoucher.ID);
            return vdvm;
        }


        private static List<VoucherDetail> GetDetails(int VoucherID)
        {
            List<VoucherDetail> details = new List<VoucherDetail>
            {
                new VoucherDetail {VoucherID = VoucherID, Text = "Game of Thrones, Season 6", Amount = 29, AccountID = 1},
                new VoucherDetail {VoucherID = VoucherID, Text = "USB Stick", Amount = 11, AccountID = 1}
            };
            return details;
        }

        private static Voucher GetVoucher()
        {
            var v = new Voucher
            {
                Date = DateTime.Now.AddDays(-3),
                Amount = 40,
                Text = "Media Markt",
                Paid = true,
                Expense = true
            };
            return v;
        }

        private static List<BalanceAccount> GetAccounts()
        {
            List<BalanceAccount> result = new List<BalanceAccount>
            {
                new BalanceAccount {Name = "Unclassified", Expense = true},
                new BalanceAccount {Name = "Car Maintenance", Expense = true},
                new BalanceAccount {Name = "Development", Expense = false},
                new BalanceAccount {Name = "Consulting", Expense = false},
                new BalanceAccount {Name = "Training", Expense = false},
                new BalanceAccount {Name = "Software", Expense = true},
                new BalanceAccount {Name = "Hosting & Internet", Expense = true}
            };
            return result;
        }
    }
}
