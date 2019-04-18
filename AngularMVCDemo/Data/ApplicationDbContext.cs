using AngularMVCDemo.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularMVCDemo.Data
{
    public class ApplicationDbContext :DbContext
    {
        public ApplicationDbContext() :base("OktaConnectionString")
        {

        }
        public static ApplicationDbContext Create() => new ApplicationDbContext();

        public DbSet<JoggingRecord> JoggingRecords { get; set; }
    }
}