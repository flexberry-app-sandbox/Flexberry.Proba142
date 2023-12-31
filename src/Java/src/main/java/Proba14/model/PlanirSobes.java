package Proba14.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proba14.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ПланирСобес
 */
@Entity(name = "IISProba14ПланирСобес")
@Table(schema = "public", name = "ПланирСобес")
public class PlanirSobes {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаПланСобес")
    private Date датаплансобес;

    @Column(name = "ИметьПриСебе")
    private String иметьприсебе;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RegistAnkety")
    @Convert("RegistAnkety")
    @Column(name = "РегистАнкеты", length = 16, unique = true, nullable = false)
    private UUID _registanketyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RegistAnkety", insertable = false, updatable = false)
    private RegistAnkety registankety;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;


    public PlanirSobes() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаПланСобес() {
      return датаплансобес;
    }

    public void setДатаПланСобес(Date датаплансобес) {
      this.датаплансобес = датаплансобес;
    }

    public String getИметьПриСебе() {
      return иметьприсебе;
    }

    public void setИметьПриСебе(String иметьприсебе) {
      this.иметьприсебе = иметьприсебе;
    }


}