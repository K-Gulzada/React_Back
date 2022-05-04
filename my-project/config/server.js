module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

// graphql
// {
//   products{
//    data{
//      id
//      attributes{
//        title
//        price
//        category{
//          data{
//            id
//            attributes{
//              title
//            }
//          }
//        }
//      }
//    }
//  }
// }