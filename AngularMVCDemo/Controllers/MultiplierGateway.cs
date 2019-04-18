using System.Data.SqlClient;
using System.Linq;
using Dapper;


namespace AngularMVCDemo.Controllers
{
    public class MultiplierGateway
    {
        private string _connectionString;

        public MultiplierGateway()
        {
            _connectionString = "Data Source=localhost;Initial Catalog=JoggingTracker;Integrated Security=SSPI;";
        }

        public MultiplierGridSet GetSetForFundId(int fundId)
        {
            var byId = GetIndices().ToDictionary(k=>k.MultiplierIndexId);
            var values = GetValuesForFund(fundId);
            var mults = MakeMultipliers(byId, values);
            return new MultiplierGridSet
            {
                FundId = fundId,
                ProfDimension = mults.Max(m => m.Index.ProfIndex),
                SizeDimension = mults.Max(m => m.Index.SizeIndex),
                ValueDimension = mults.Max(m => m.Index.ValueIndex),
                MultiplierGrids = mults
                .GroupBy(g => g.Index.ProfIndex)
                .Select(s => new GridSet
                {
                    GridIndex = s.Key,
                    GridType = "Prof",
                    GridRows = s.GroupBy(g => g.Index.ValueIndex)
                    .Select(k => new GridRow
                    {
                        GridIndex = k.Key,
                        GridType = "Value",
                        GridItems = k.Select(m => new GridItem
                        {
                            BucketId = m.Index.MultiplierIndexId,
                            ProfIndex = m.Index.ProfIndex,
                            SizeIndex = m.Index.SizeIndex,
                            ValueIndex = m.Index.ValueIndex,
                            Value = m.Value
                        }).OrderBy(o => o.SizeIndex).ToArray()

                    }).OrderBy(o => o.GridIndex).ToArray()
                }).ToArray()            
            };

        }

      

        private static Multiplier[] MakeMultipliers(System.Collections.Generic.Dictionary<int, MultiplierIndex> indicesById, MultiplierValue[] values)
        {
            return values.Select(s => new Multiplier
            {
                FundId = s.FundId,
                MultiplierValueId = s.MultiplierValueId,
                Value = s.Value,
                Index = indicesById[s.MultiplierIndexId]
            }).ToArray();
        }

        private MultiplierIndex[] GetIndices()
        {
            using (var con = new SqlConnection(_connectionString))
            {
                con.Open();
                return con.Query<MultiplierIndex>(@"
                    SELECT[MultiplierIndexId]
                          ,[SizeIndex]
                          ,[ProfIndex]
                          ,[ValueIndex]
                      FROM[dbo].[MultiplierIndex]").ToArray();
            }
        }

        private MultiplierValue[] GetValuesForFund(int fundId)
        {
            using (var con = new SqlConnection(_connectionString))
            {
                con.Open();
                return con.Query<MultiplierValue>(@"
                    SELECT [MultiplierValueId]
                          ,[FundId]
                          ,[MultiplierIndexId]
                          ,[MultiplierValue] as Value
                      FROM [dbo].[MultiplierValue] WHERE FundId=@fundId",new { fundId }).ToArray();
            }
        }

    }
}
