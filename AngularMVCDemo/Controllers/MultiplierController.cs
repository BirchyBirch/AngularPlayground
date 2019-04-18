using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace AngularMVCDemo.Controllers
{
    public class MultiplierGridSetController : ApiController
    {
        MultiplierGateway _gateway = new MultiplierGateway();
        [HttpGet]
        public MultiplierGridSet Get(int fundId)
        {
            return _gateway.GetSetForFundId(fundId);
        }

        [HttpPost]
        public void Post(MultiplierGridSet gridSet)
        {
            using (File.CreateText($@"C:\Users\Chris Burchsted\Desktop\multdump\{DateTime.Now.ToString("mmSS")}.txt"))
            {

            }
        }
    }

    public class MultiplierGridSet
    {
        public int SizeDimension { get; set; }
        public int ValueDimension { get; set; }
        public int ProfDimension { get; set; }
        public int FundId { get; set; }
        public GridSet[] MultiplierGrids { get; set; }
    }
    public class GridSet
    {
        public int GridIndex { get; set; }
        public string GridType { get; set; }
        public GridRow[] GridRows { get; set; }
    }

    public class GridRow
    {
        public int GridIndex { get; set; }
        public string GridType { get; set; }

        public GridItem[] GridItems { get; set; }
    }

    public class GridItem
    {
        public int SizeIndex { get; set; }
        public int ValueIndex { get; set; }
        public int ProfIndex { get; set; }
        public int BucketId { get; set; }
        public decimal Value { get; set; }
    }
}
