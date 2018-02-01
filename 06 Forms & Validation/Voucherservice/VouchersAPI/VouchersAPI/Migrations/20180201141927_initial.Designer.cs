﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;
using Vouchers;

namespace Vouchers.Migrations
{
    [DbContext(typeof(VouchersDBContext))]
    [Migration("20180201141927_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Vouchers.BalanceAccount", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("Balance");

                    b.Property<DateTime>("Created");

                    b.Property<bool>("Expense");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("ID");

                    b.ToTable("BalanceAccounts");
                });

            modelBuilder.Entity("Vouchers.Voucher", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<decimal>("Amount");

                    b.Property<DateTime>("Date");

                    b.Property<bool>("Expense");

                    b.Property<bool>("Paid");

                    b.Property<bool>("Remark");

                    b.Property<string>("Text");

                    b.HasKey("ID");

                    b.ToTable("Vouchers");
                });

            modelBuilder.Entity("Vouchers.VoucherDetail", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccountID");

                    b.Property<int>("Amount");

                    b.Property<string>("Comment");

                    b.Property<string>("Text");

                    b.Property<int>("VATRate");

                    b.Property<int>("VoucherID");

                    b.HasKey("ID");

                    b.HasIndex("AccountID");

                    b.HasIndex("VoucherID");

                    b.ToTable("VoucherDetails");
                });

            modelBuilder.Entity("Vouchers.VoucherDetail", b =>
                {
                    b.HasOne("Vouchers.BalanceAccount", "Account")
                        .WithMany("VoucherDetails")
                        .HasForeignKey("AccountID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Vouchers.Voucher")
                        .WithMany("Details")
                        .HasForeignKey("VoucherID")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
