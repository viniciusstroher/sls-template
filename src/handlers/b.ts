import 'source-map-support/register';

export const handler = (
    event: any,
    context: any, 
    callback: any
) => {
    console.log(event);
    //precisa retornar o callback
    callback();

}