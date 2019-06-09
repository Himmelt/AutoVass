package org.soraworld.autovass.code.snippet;

public class Passivation {

    private static final String CODE = "NETWORK\n" +
            "TITLE = F-Peripherie i.O. keine Passivierung{%0}\n" +
            "      U     \"VKE=1\";\n" +
            "      =     L     24.0;\n" +
            "      U     L     24.0;\n" +
            "      UN    {%DB1}.QBAD;\n" +
            "      UN    {%DB2}.QBAD;\n" +
            "      UN    {%DB3}.QBAD;\n" +
            "      UN    {%DB4}.QBAD;\n" +
            "      UN    {%DB5}.QBAD;\n" +
            "      UN    {%DB6}.QBAD;\n" +
            "      =     \"M_AC{%INDEX}\";\n" +
            "      U     L     24.0;\n" +
            "      UN    {%DB1}.ACK_REQ;\n" +
            "      UN    {%DB2}.ACK_REQ;\n" +
            "      UN    {%DB3}.ACK_REQ;\n" +
            "      UN    {%DB4}.ACK_REQ;\n" +
            "      UN    {%DB5}.ACK_REQ;\n" +
            "      UN    {%DB6}.ACK_REQ;\n" +
            "      =     \"M_ACKR{%INDEX}\";\n";

    private final int ARG;
    private final int amount;
    private final String[] ERRORS;

    public Passivation(int ARG,int amount,String... ERRORS) {
        this.ARG = ARG;
        this.amount = amount;
        this.ERRORS = ERRORS;
    }

    public String getCode() {
        return "";
    }
}
